function changeStyle(radio) {
  const text = document.getElementById('text');
  text.style.fontWeight = '';
  text.style.fontStyle = '';
  text.style.textDecoration = '';

  if (radio.value === 'bold') text.style.fontWeight = 'bold';
  if (radio.value === 'italic') text.style.fontStyle = 'italic';
  if (radio.value === 'underline') text.style.textDecoration = 'underline';
}
