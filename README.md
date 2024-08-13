# ContactUs-Using-Telegram-bot

# Contact Us Form with Telegram Integration

This project is a simple "Contact Us" form built with HTML, CSS, JavaScript, and Bootstrap. The form allows users to send messages and optionally attach files. The form submissions are sent directly to a specified Telegram chat using the Telegram Bot API.

## Features

- **User Information**: Collects user's name, email, and message.
- **File Attachments**: Users can attach multiple files to their messages (up to 50MB per file).
- **Progress Indicator**: Displays a progress bar and spinner during file upload.
- **Telegram Integration**: Sends form submissions to a specified Telegram chat.

## Getting Started

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
