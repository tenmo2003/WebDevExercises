var folderLabels = document.querySelectorAll('.folder > label');
folderLabels.forEach(function (label) {
    label.addEventListener('click', function () {
        var nestedFolders = this.parentNode.querySelector('.nested');
        nestedFolders.classList.toggle('active');
    });
});