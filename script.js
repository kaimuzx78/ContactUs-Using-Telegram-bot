$(document).ready(function() {
    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        const name = $('#contactName').val().trim();
        const email = $('#contactEmail').val().trim();
        const message = $('#contactMessage').val().trim();
        const mobile = $('#contactMobile').val().trim();
        const telegramId = $('#contactTelegram').val().trim();
        const files = $('#contactFile')[0].files;

        // Max file size (e.g., 50MB for demonstration)
        const MAX_FILE_SIZE = 50 * 1024 * 1024; // 50MB

        if (name && email && message) {
            const chat_id = '@Chat_Id_Here';
            const bot_token ='Bot_Token_Here';

            $('#spinner').show(); // Show the loading spinner
            $('#progressContainer').show(); // Show the progress bar

            let additionalInfo = '';
            if (mobile) {
                additionalInfo += `\nMobile: ${mobile}`;
            }
            if (telegramId) {
                additionalInfo += `\nTelegram ID: ${telegramId}`;
            }

            if (files.length > 0) {
                let completedRequests = 0;

                function sendNextFile(index) {
                    if (index < files.length) {
                        const file = files[index];

                        if (file.size > MAX_FILE_SIZE) {
                            $('#message').html('<div class="alert alert-warning">File size exceeds the limit of 50MB.</div>');
                            return; // Skip this file
                        }

                        const formData = new FormData();
                        formData.append('chat_id', chat_id);
                        formData.append('caption', `Name: ${name}\nEmail: ${email}\nMessage: ${message}${additionalInfo}`);
                        formData.append('document', file);

                        const url = `https://api.telegram.org/bot${bot_token}/sendDocument`;

                        $.ajax({
                            url: url,
                            type: 'POST',
                            data: formData,
                            contentType: false,
                            processData: false,
                            xhr: function() {
                                const xhr = new XMLHttpRequest();
                                xhr.upload.addEventListener('progress', function(e) {
                                    if (e.lengthComputable) {
                                        const percentComplete = (e.loaded / e.total) * 100;
                                        $('#progressBar').css('width', percentComplete + '%').attr('aria-valuenow', percentComplete);
                                    }
                                });
                                return xhr;
                            },
                            success: function(data) {
                                if (data.ok) {
                                    completedRequests++;
                                    sendNextFile(index + 1); // Move to next file
                                } else {
                                    $('#message').html('<div class="alert alert-danger">Failed to submit one of the attachments. Please try again.</div>');
                                }
                            },
                            error: function() {
                                $('#message').html('<div class="alert alert-danger">An error occurred while uploading a file. Please try again.</div>');
                            },
                            complete: function() {
                                if (index === files.length - 1) { // After the last file is uploaded
                                    $('#spinner').hide(); // Hide the loading spinner
                                    $('#progressContainer').hide(); // Hide the progress bar
                                    $('#message').html('<div class="alert alert-success">All files submitted successfully!</div>');
                                    $('#contactForm')[0].reset();
                                }
                            }
                        });
                    }
                }

                sendNextFile(0); // Start sending files
            } else {
                // If no file is attached, use sendMessage
                const textMessage = `Name: ${name}\nEmail: ${email}\nMessage: ${message}${additionalInfo}`;
                const url = `https://api.telegram.org/bot${bot_token}/sendMessage?chat_id=${chat_id}&text=${encodeURIComponent(textMessage)}`;

                $.ajax({
                    url: url,
                    type: 'GET',
                    success: function(data) {
                        $('#spinner').hide(); // Hide the loading spinner
                        $('#progressContainer').hide(); // Hide the progress bar
                        if (data.ok) {
                            $('#message').html('<div class="alert alert-success">Message submitted successfully!</div>');
                            $('#contactForm')[0].reset();
                        } else {
                            $('#message').html('<div class="alert alert-danger">Failed to submit message. Please try again.</div>');
                        }
                    },
                    error: function() {
                        $('#spinner').hide(); // Hide the loading spinner
                        $('#progressContainer').hide(); // Hide the progress bar
                        $('#message').html('<div class="alert alert-danger">An error occurred. Please try again.</div>');
                    }
                });
            }
        } else {
            $('#message').html('<div class="alert alert-warning">Please fill in all required fields.</div>');
        }
    });
});
