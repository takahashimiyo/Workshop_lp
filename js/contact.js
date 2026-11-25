const form = document.querySelector('#contact-form');
const result = document.querySelector('#contact-result');

document.querySelector('#contact-demo').addEventListener('click', () => {
  if (!form.reportValidity()) return;
  result.textContent = '入力ありがとうございます。デモのため、お問い合わせは送信されていません。';
  result.hidden = false;
  result.focus();
});

// Prevent implicit form submission (for example, by pressing Enter).
form.addEventListener('submit', (event) => event.preventDefault());
