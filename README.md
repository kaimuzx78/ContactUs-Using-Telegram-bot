
# Contact Us Form with Telegram Integration

This project is a simple "Contact Us" form built with HTML, CSS, JavaScript, and Bootstrap. The form allows users to send messages and optionally attach files. The form submissions are sent directly to a specified Telegram chat using the Telegram Bot API.

## Features

- **User Information**: Collects user's name, email, and message.
- **File Attachments**: Users can attach multiple files to their messages (up to 50MB per file).
- **Progress Indicator**: Displays a progress bar and spinner during file upload.
- **Telegram Integration**: Sends form submissions to a specified Telegram chat.
- **Screenshot**
- ![Project Screenshot]<img src="https://raw.githubusercontent.com/kaimuzx78/ContactUs-Using-Telegram-bot/main/Screenshot_2024-08-13-19-31-34-600_com.android.chrome.jpg" width="28%"/>
- 

## Getting Started

## How to Build

Special Thanks To @Ayoubull
### Setup
#### 1 - create telegram bot
find Bot Father on Telegram by search on search bar or use this link : [@BotFather](https://t.me/BotFather)

start bot Father and send /newbot, choose name and username for your bot. after creating bot on bot Father you will receive your bot link and token, copy your bot token then click your bot link and start your bot.
<p float="left">
  <img src="https://raw.githubusercontent.com/Ayoubull/CamPhish/main/Preview/Frame%201.jpg" width="28%" />
  <img src="https://raw.githubusercontent.com/Ayoubull/CamPhish/main/Preview/Frame%202.jpg" width="28%" />
</p>

So here is our bot token ``` 63xxxxxx71:AAFoxxxxn0hwA-2TVSxxxNf4c ``` (make sure we don't share it to anyone).

#### 2 - Get Chat ID for a bot
1. Search and open our new Telegram bot
1. After well are Click Start or send a message
1. Open this URL in a browser `https://api.telegram.org/bot{our_bot_token}/getUpdates`   
    - See we need to prefix our token with a wor `bot`
    - Eg: `https://api.telegram.org/bot63xxxxxx71:AAFoxxxxn0hwA-2TVSxxxNf4c/getUpdates`
1. We will see a json like so
    ```
    {
      "ok": true,
      "result": [
        {
          "update_id": 83xxxxx35,
          "message": {
            "message_id": 2643,
            "from": {...},
            "chat": {
              "id": 21xxxxx38,
              "first_name": "...",
              "last_name": "...",
              "username": "@username",
              "type": "private"
            },
            "date": 1703062972,
            "text": "/start"
          }
        }
      ]
    }
    ```
1. Check the value of `result.0.message.chat.id`, and here is our Chat ID: `21xxxxx38`
3. Let's try to send a message: `https://api.telegram.org/bot63xxxxxx71:AAFoxxxxn0hwA-2TVSxxxNf4c/sendMessage?chat_id=21xxxxx38&text=test123`
4. When we set the bot token and chat id correctly, the message `test123` should be arrived on our Telegram bot chat.
### Modify script configuration BOT_TOKEN and CHAT_ID
Now replace the BOT_TOKEN and CHAT_ID keys with you own keys
```
const BOT_TOKEN = '00000000:XXXXXXXXXX-XXXXXXXXXXXXXXX_XXXX'; // Replace with your bot's TOKEN
const CHAT_ID = '1234567899'; // Replace with your bot's chat ID
```

### Prerequisites

- A web browser (Chrome, Firefox, etc.)
- A Telegram bot with a valid bot token. You can create one using the [BotFather](https://core.telegram.org/bots#botfather).
- A Telegram chat ID where messages will be sent.

### Installation

1. **Clone the repository:**
    ```bash
    git clone https://github.com/yourusername/contact-us-telegram.git
    cd contact-us-telegram
    ```

2. **Modify the following files:**

   - **`script.js`**: Replace the `bot_token` and `chat_id` variables with your own Telegram bot token and chat ID.

     ```javascript
     const bot_token = 'YOUR_BOT_TOKEN_HERE';
     const chat_id = 'YOUR_CHAT_ID_HERE';
     ```

3. **Open `index.html` in your web browser** to view the form and test its functionality.

### Usage

1. Fill in your name, email, and message in the form.
2. Optionally, attach files to your message.
3. Click the "Submit" button to send your message to the specified Telegram chat.

### Customization

- **File Size Limit**: You can adjust the maximum file size for uploads by modifying the `MAX_FILE_SIZE` variable in `script.js`.
- **Form Fields**: Customize the form fields in `index.html` to collect additional or different information.
- **Styling**: Modify the CSS in `index.html` to change the appearance of the form.

### Known Limitations

- **File Size**: The current implementation supports file uploads up to 50MB per file due to Telegram's API limitations.
- **No Backend**: This project does not include server-side logic for handling large file uploads or chunked uploads.

### Future Enhancements

- **Server-Side Handling**: Add server-side support for chunked uploads and larger file handling.
- **Form Validation**: Improve client-side form validation to ensure all fields are properly filled out.

### Contributing

Feel free to fork this repository and submit pull requests with improvements or bug fixes. Contributions are welcome!

### License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

### Contact

If you have any questions or suggestions, feel free to open an issue on GitHub or contact me directly at `your-email@example.com`.

---

*This project is inspired by the need for a simple yet effective contact form that integrates seamlessly with Telegram. Perfect for small businesses, personal projects, or anyone needing a quick way to capture user feedback and inquiries.*
