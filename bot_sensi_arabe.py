import logging
from telegram import (
    Update,
    InlineKeyboardButton,
    InlineKeyboardMarkup,
    WebAppInfo,
)
from telegram.ext import (
    Application,
    CommandHandler,
    CallbackQueryHandler,
    MessageHandler,
    ContextTypes,
    filters,
)

logging.basicConfig(
    format="%(asctime)s - %(name)s - %(levelname)s - %(message)s",
    level=logging.INFO,
)
logger = logging.getLogger(__name__)

# ---------- CONFIG ----------
BOT_TOKEN = "8224431904:AAEhgPbXtzRAc1VY5QdW0c1_xqWY3JheKfg"
MINI_APP_URL = "https://generadorarabevip.github.io/generador-sensi-arabe-vip/"
ACCESS_KEY = "666"

# IDs de stickers que quieras rotar (puedes agregar los que quieras)
STICKERS = [
    "CAACAgIAAxkBAAERypFqj_6H9hxnKEr0SzoQEy4N9yi6GQAC1gADZFG6BoTZJI4S_6RxPQQ",
    "CAACAgIAAxkBAAERypJqj_6HIdp1zQkL6zOJU_FPLL-JZwACpgAD9wLID6sM5POpKsZYPQQ",
    "CAACAgUAAxkBAAERypNqj_6Hpo91NNHYQPmAVA0FjjP5pwACFwEAAp-O5zBA1OfqiN2MxD0E",
    "CAACAgEAAxkBAAERypdqj_6cHe66FtgoOPIhJKADT_Yu5wACfQMAAj7OWETdjsszH42-rz0E",
    "CAACAgIAAxkBAAERyphqj_6cVECW2VuTf_XmEwaflp_UCQACyDkAAmipOUvTrFAPisemJz0E",
    "CAACAgIAAxkBAAERyplqj_6cSjg6wE_Zl-sBI9Zydl-wgAACHSEAAmJWGEiU7JrmyeQGjD0E",
]

# Guarda qué usuarios ya desbloquearon acceso (en memoria; para producción usa una BD)
usuarios_autorizados = set()
# Guarda qué usuarios están en proceso de escribir la key
esperando_key = set()


# ---------- HANDLERS ----------

async def start(update: Update, context: ContextTypes.DEFAULT_TYPE):
    import random

    chat_id = update.effective_chat.id

    # 1. Manda sticker aleatorio (si tienes varios cargados)
    if STICKERS:
        sticker_id = random.choice(STICKERS)
        try:
            await context.bot.send_sticker(chat_id=chat_id, sticker=sticker_id)
        except Exception as e:
            logger.warning(f"No se pudo enviar sticker: {e}")

    # 2. Manda el mensaje de bienvenida
    texto_bienvenida = (
        "🩸🎯 *BIENVENIDO A SENSI ÁRABE VIP* 🎯🩸\n"
        "👺 SI HAS ENTRADO AQUI ES POR QUE ERES DIFERENTE AL RESTO...\n"
        "🔥 Aquí no vienes a probar suerte…\n"
        "vienes a buscar la configuración que te haga jugar diferente ☝️⚙️📱👺\n\n"
        "👑 GENERADOR OFICIAL\n"
        "🎯 SENSIBILIDADES\n"
        "⚡ CONFIGURACIONES\n"
        "🩸 AJUSTES VIP\n\n"
        "الأفضل — LOS MEJORES\n\n"
        "🔐 Acceso exclusivo para quienes buscan llevar tu juego al siguiente nivel.\n\n"
        "6 • 6 • 6 🩸"
    )

    keyboard = InlineKeyboardMarkup(
        [
            [InlineKeyboardButton("⚙️📱👺 Abrir generador — Sensi Árabe VIP الأفضل", callback_data="abrir_generador")]
        ]
    )

    await context.bot.send_message(
        chat_id=chat_id,
        text=texto_bienvenida,
        parse_mode="Markdown",
        reply_markup=keyboard,
    )


async def abrir_generador(update: Update, context: ContextTypes.DEFAULT_TYPE):
    query = update.callback_query
    await query.answer()

    user_id = query.from_user.id

    if user_id in usuarios_autorizados:
        # Ya tiene acceso, mándale directo el botón de la Mini App
        await mostrar_acceso_concedido(query.message.chat_id, context)
        return

    # Pide la key
    esperando_key.add(user_id)
    await query.edit_message_text(
        text=(
            "🔐 *ACCESO RESTRINGIDO*\n\n"
            "👺👹 Introduce tu KEY DE ACCESO para continuar.\n\n"
            "🔑 Escribe tu clave:"
        ),
        parse_mode="Markdown",
    )


async def recibir_texto(update: Update, context: ContextTypes.DEFAULT_TYPE):
    user_id = update.effective_user.id
    texto = update.message.text.strip()

    if user_id in esperando_key:
        if texto == ACCESS_KEY:
            usuarios_autorizados.add(user_id)
            esperando_key.discard(user_id)
            await mostrar_acceso_concedido(update.effective_chat.id, context)
        else:
            await update.message.reply_text(
                "❌ Clave incorrecta. Intenta de nuevo:\n🔑 Escribe tu clave:"
            )
        return

    # Si no está esperando key, puedes ignorar o responder algo default
    await update.message.reply_text("Usa /start para comenzar 👺")


async def mostrar_acceso_concedido(chat_id, context: ContextTypes.DEFAULT_TYPE):
    keyboard = InlineKeyboardMarkup(
        [
            [
                InlineKeyboardButton(
                    "⚙️📱👺👹🎯 Abrir Sensi Árabe VIP",
                    web_app=WebAppInfo(url=MINI_APP_URL),
                )
            ]
        ]
    )

    await context.bot.send_message(
        chat_id=chat_id,
        text=(
            "✅ *ACCESO CONCEDIDO*\n\n"
            "Bienvenido al generador, sensi árabe vip\n\n"
            "⚙️📱👺👹🎯 Sensi Árabe VIP está listo."
        ),
        parse_mode="Markdown",
        reply_markup=keyboard,
    )


def main():
    app = Application.builder().token(BOT_TOKEN).build()

    app.add_handler(CommandHandler("start", start))
    app.add_handler(CallbackQueryHandler(abrir_generador, pattern="^abrir_generador$"))
    app.add_handler(MessageHandler(filters.TEXT & ~filters.COMMAND, recibir_texto))

    logger.info("Bot corriendo...")
    app.run_polling()


if __name__ == "__main__":
    main()

