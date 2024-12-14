/* edit profile button */
document.addEventListener('DOMContentLoaded', function() {
    
    function toggleEdit(elementId, button) {
        const element = document.getElementById(elementId);
        const isEditable = element.isContentEditable;

        if (isEditable) {
            // Save the changes
            element.contentEditable = 'false';
            button.textContent = 'Edit';

            // Save to localStorage
            localStorage.setItem(elementId, element.textContent);
        } else {
            // Enable editing
            element.contentEditable = 'true';
            element.focus(); // Focus on the text element
            button.textContent = 'Save';
        }
    }

    // Load saved data from localStorage
    function loadSavedData() {
        const name = localStorage.getItem('name');
        const email = localStorage.getItem('email');
        const password = localStorage.getItem('password');

        if (name) {
            document.getElementById('name').textContent = name;
        }
        if (email) {
            document.getElementById('email').textContent = email;
        }
        if (password) {
            document.getElementById('password').textContent = password;
        }
    }

    // Add event listeners for each edit button
    document.getElementById('editTextName').addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the <a> tag
        toggleEdit('name', this);
    });

    document.getElementById('editEmail').addEventListener('click', function(event) {
        event.preventDefault();
        toggleEdit('email', this);
    });

    document.getElementById('editPassword').addEventListener('click', function(event) {
        event.preventDefault();
        const passwordInput = document.getElementById('password');
        const isEditable = passwordInput.readOnly;
        if (isEditable) {
            // Change to editable mode
            passwordInput.readOnly = false;
            passwordInput.type = 'text'; // Show actual password
            this.textContent = 'Save';
            passwordInput.focus(); // Focus on the password input
        } else {
            // Save the changes
            passwordInput.readOnly = true;
            passwordInput.type = 'password'; // Hide actual password
            this.textContent = 'Change';

            // Save to localStorage
            localStorage.setItem('password', passwordInput.value);
        }
    });

    // Profile picture functionality
    const profileImage = document.getElementById('profileImage');
    const imageUpload = document.getElementById('imageUpload');
    const uploadButton = document.getElementById('uploadButton');
    const removeButton = document.getElementById('removeButton');

    // Load saved profile image from localStorage
    const savedImage = localStorage.getItem('profileImage');
    if (savedImage) {
        profileImage.src = savedImage;
    }

    // Handle image upload
    uploadButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the <a> tag
        imageUpload.click(); // Trigger the file input click
    });

    imageUpload.addEventListener('change', function() {
        const file = this.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                profileImage.src = e.target.result; // Set the image source to the uploaded file
                localStorage.setItem('profileImage', e.target.result); // Save the image to localStorage
            }
            reader.readAsDataURL(file); // Read the file as a data URL
        }
    });

    // Handle image removal
    removeButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent the default behavior of the <a> tag
        profileImage.src = 'default-pic.png'; // Reset to the default image
        localStorage.removeItem('profileImage'); // Remove the image from localStorage
        imageUpload.value = ''; // Clear the file input
    });

    // Load saved data on page load
    loadSavedData();
});
