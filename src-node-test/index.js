(function() {
    let $smsForm = document.getElementById('sms-form');
    let $submitBtn = document.getElementById('post');

    $smsForm.onSubmit = () => {
        e.preventDefault();
        let confirmation = window.confirm("Send this text message");

        if (confirmation) {
            $submitBtn.disabled = true;
            $smsForm.submit();
            console.log('pig1');
        }
    }
})();
