$(document).ready(function () {
    const $gallery = $('#lightgallery');

    // Initialize LightGallery
    $gallery.lightGallery({
        selector: '.item',
        subHtmlSelectorRelative: true,
        download: true,
        hash: false // Disable LightGallery's built-in hash management
    });

    // Open the gallery at the correct slide if the URL contains a hash
    const hash = window.location.hash;
    if (hash.startsWith('#image=')) {
        const imageId = hash.replace('#image=', ''); // Extract the image ID
        const $targetItem = $gallery.find(`.item[data-id="${imageId}"]`);

        if ($targetItem.length) {
            const index = $targetItem.index();

            // Trigger LightGallery at the specified index
            setTimeout(() => {
                $targetItem.trigger('click');
                console.log(`Opened gallery at index: ${index} with data-id: ${imageId}`);
            }, 100);
        } else {
            console.warn(`No item found with data-id: ${imageId}`);
        }
    }

    // Update the hash in the URL when navigating slides
    $gallery.on('onAfterSlide.lg', function (event, prevIndex, currentIndex) {
        const $currentItem = $gallery.find('.item').eq(currentIndex);
        const imageId = $currentItem.attr('data-id');

        if (imageId) {
            const newUrl = `${window.location.pathname}#image=${imageId}`;
            history.replaceState(null, null, newUrl); // Update URL without reloading
            console.log(`Updated URL to: ${newUrl}`);
        }
    });

    // Clear the hash from the URL when the gallery is closed
    $gallery.on('onCloseAfter.lg', function () {
        const baseUrl = window.location.pathname + window.location.search; // Base URL without the hash
        history.replaceState(null, null, baseUrl); // Remove the hash from the URL
        console.log('Gallery closed, hash cleared.');
    });
});
