    // -------   Mail Send ajax

    $(document).ready(function() {
        var form = $('#contactForm'); // contact form
        var submit = $('#submit-text'); // submit button

        // form submit event
        form.on('submit', function(e) {
            e.preventDefault(); 
           //e.stopImmediatePropagation();
            $.ajax({
                url: 'contact_process.php', 
                type: 'POST', 
                dataType: 'html', 
                data: form.serialize(), 
               // crossDomain: true,
                beforeSend: function() {
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    $('.modal1 .modal-body').html(data).css('color', 'green');
                    $('.modal.modal1').modal('show') // you need bootstrap
                    form.trigger('reset'); // reset form
                    submit.html('SEND MESSAGE');  // reset submit button text
                },
                error: function(e) {
                    $('.modal1 .modal-body').html('error!, please try again').css('color', 'red');
                    $('.modal.modal1').modal('show')
                    submit.html('SEND MESSAGE'); 
                }
            });
        });

        var form2 = $('#contactForm2')
        form2.on('submit', function(e) {
            e.preventDefault(); 
           //e.stopImmediatePropagation();
            $.ajax({
                url: 'contact_process.php', 
                type: 'POST', 
                dataType: 'html', 
                data: form.serialize(), 
               // crossDomain: true,
                beforeSend: function() {
                    submit.html('Sending....'); // change submit button text
                },
                success: function(data) {
                    $('.modal2 .modal-body2').html(data).css('color', 'green');
                    $('.modal.modal2').modal('show') // you need bootstrap
                    form.trigger('reset'); // reset form
                    submit.html('SEND MESSAGE');  // reset submit button text
                },
                error: function(e) {
                    $('.modal2 .modal-body').html('error!, please try again').css('color', 'red');
                    $('.modal.modal2').modal('show')
                    submit.html('SEND MESSAGE'); 
                }
            });
        });
    });

