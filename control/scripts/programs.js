   $(function() {

    if(window.location.href.indexOf("programs") > -1) {

      /* submit */
    $(".form-programs").validate({
        onkeyup:false,
        onclick:false,
        rules: {
          'name':{
            required: true,
          },
          'description':{
            required: true,
          },
          'ref2':{
            required:true
          }
        },
        messages: {
            'name': {
                required: "Required"
            },
            'description': {
                required: "Required"
            },
            'ref2': {
                required: "Required",
            }
      },
      submitHandler: function(form) {
            // $('.loading').remove();
            // loading = "<div class='loading'></div>";
            // $('.form-programs .navigator').append(loading);
            // $('.form-programs .btn-save').hide();
            // $('.form-programs .btn-cancel').hide();
            // $('.form-programs .btn-more').hide();
            // form.submit();
      }

     });

     $('#file_image').change(function () {

          //because this is single file upload I use only first index
          var f = this.files[0]
          var name = f.name;
          var ext = name.split('.').pop();
        if(ext == "jpg" || ext == "jpeg" || ext == "png"){
          //here I CHECK if the FILE SIZE is bigger than 500kb (numbers below are in bytes)
            if (f.size > 5000000 || f.fileSize > 5000000)
            {
               //show an alert to the user
               alert("Maximum file size only 1MB")

               //reset file upload control
               this.value = null;
            }
        }else{
          //show an alert to the user
             alert("File Allowed only png, jpg, jpeg")
        }

      });

     $('#file_thumb').change(function () {

          //because this is single file upload I use only first index
          var f = this.files[0]
          var name = f.name;
          var ext = name.split('.').pop();
        if(ext == "jpg" || ext == "jpeg" || ext == "png"){
          //here I CHECK if the FILE SIZE is bigger than 500kb (numbers below are in bytes)
            if (f.size > 1000000 || f.fileSize > 1000000)
            {
               //show an alert to the user
               alert("Maximum file size only 1MB")

               //reset file upload control
               this.value = null;
            }
        }else{
          //show an alert to the user
             alert("File Allowed only png, jpg, jpeg")
        }

      });

     
     $(".form-programs").submit(function(e) {
         if($("#name").hasClass('error') || $("#file_image").hasClass('error') || $("#file_thumb").hasClass('error')){
          $('.form-programs .loading').remove();
          $('.form-programs .btn-save').show();
          $('.form-programs .btn-cancel').show();
          $('.form-programs .btn-more').show();
          return false;
        }else{
              loading = "<div class='loading'></div>";
              $('.form-programs .navigator').append(loading);
              $('.form-programs .btn-save').hide();
              $('.form-programs .btn-cancel').hide();
              $('.form-programs .btn-more').hide();

              var formData = new FormData(this);
              // formData.append('ref3', $('select[name="ref3"]').val());
              // formData.append('ref4', $('select[name="ref4"]').val());
              // formData.append('name', $('input[name="name"]').val());
              formData.append('description', CKEDITOR.instances.description.getData());
              // formData.append('price', $('input[name="price"]').val());
              // formData.append('expired_date', $('input[name="expired_date"]').val());
              // formData.append('ref2', $('select[name="ref2"]').val());
              // formData.append('id', $('input[name="id"]').val());
              // // Attach file
              // formData.append('file_image', $('input[name="file_image"]').prop('files'));

              var url =$(this).attr("action");
              $.ajax({
                  url:url,
                  type: 'POST',
                  dataType: "json",
                  data: formData,
                  mimeType: "multipart/form-data",
                  success: function (data) {
                    $('.form-programs .loading').remove();
                    $('.form-programs .btn-save').show();
                    $('.form-programs .btn-cancel').show();
                    $('.form-programs .btn-more').show();
                    if(data.status > 0){
                        alert(data.message);
                    }else{
                       window.location=window.adminURL+window.titleLink+data.linkId;
                    }
                  },
                  error: function(){
                    $('.form-programs .loading').remove();
                    $('.form-programs .btn-save').show();
                    $('.form-programs .btn-cancel').show();
                    $('.form-programs .btn-more').show();
                  },
                  cache: false,
                  contentType: false,
                  processData: false
              });
        }
            
      });


        /* edit */
        if($('#id').val()){

         var ckeditorBody = {
                 skin : 'moono-dark',
                 toolbar :
                  [
                    ['Source','-','Preview'],
                    ['Bold','Italic','Underline','Strike']
                  ]
              };

          CKEDITOR.replace( 'description', ckeditorBody);

        }

    }

  });