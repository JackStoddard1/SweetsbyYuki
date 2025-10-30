(function ($) {
    const l10n = $('.l10n').l10n({
        dictList: words
    });

    $('#via-js').html(l10n.getText('Your plugin is not working'));

    $('#swap-lang-en').click(function() {
        l10n.setLanguage('en');
    });

    $('#swap-lang-jp').click(function() {
        l10n.setLanguage('jp');
    });

    $('#swap-lang-en-mobile').click(function() {
        l10n.setLanguage('en');
    });

    $('#swap-lang-jp-mobile').click(function() {
        l10n.setLanguage('jp');
    });

}(jQuery));
