// For inputMask

// inputMask
let inputs = document.querySelectorAll('input[type="tel"]');
let im = new Inputmask("+7(999)999-99-99");
im.mask(inputs);

// validate
function validateForm(selector, rules) {
  new window.JustValidate(selector, {
    rules: rules,
    submitHandler: function (form, values, ajax) {
      console.log(form);

      let formData = new FormData(form);

      fetch("mail.php", {
          method:"POST",
          body: formData
      })
      .then(data => {
          console.log(data);
          console.log('Всё отправлено');
          form.reset();
      })
    },
  });
}

validateForm(".form", {
  email: { required: true, email: true },
  fio: { required: true },
  tel: { required: true },
});
