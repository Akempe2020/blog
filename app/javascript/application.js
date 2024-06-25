// Configure your import map in config/importmap.rb. Read more: https://github.com/rails/importmap-rails
import "@hotwired/turbo-rails"

document.addEventListener("DOMContentLoaded", function() {
    const items = document.querySelectorAll(".animated-list li");
    
    items.forEach((item, index) => {
        item.style.animationDelay = `${(index + 1) * 0.3}s`; // Adjust delay as needed
    });
});