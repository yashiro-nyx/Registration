(function () {
  'use strict';
  
  const form       = document.getElementById('regForm');
  const successMsg = document.getElementById('successMsg');
  
  function isValidName(v) { return /^[A-Za-z\s]+$/.test(v.trim()); }
  function isEmail(v)     { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }
  function isPhone(v)     { return /^(09|\+639)\d{9}$/.test(v.replace(/\s/g, '')); }
  function isZip(v)       { return /^\d{4}$/.test(v.trim()); }
  function isText(v)      { return v.trim().length >= 2; }
  
  function showError(input, msg) {
    clearError(input);
    const err = document.createElement('small');
    err.className = 'error-msg';
    err.textContent = msg;
    input.parentElement.appendChild(err);
    input.classList.add('invalid');
    input.classList.remove('valid');
  }
  
  function clearError(input) {
    const existing = input.parentElement.querySelector('.error-msg');
    if (existing) existing.remove();
    input.classList.remove('invalid');
  }
  
  function markValid(input) {
    clearError(input);
    input.classList.add('valid');
  }
  
  function validateField(input) {
    const val = input.type === 'date' ? input.value : input.value.trim();
    const name = input.name;
    const required = input.hasAttribute('required');
    
    if (!required && !val) {
      clearError(input);
      input.classList.remove('valid');
      return true;
    }
    
    if (required && !val) {
      showError(input, 'This field is required.');
      return false;
    }
    
    if (input.type === 'email' && !isEmail(val)) {
      showError(input, 'Enter a valid email (e.g. juan@email.com).');
      return false;
    }
    
    if (name === 'phone' && !isPhone(val)) {
      showError(input, 'Enter a valid PH mobile number (e.g. 09171234567).');
      return false;
    }
    
    if (name === 'zipCode' && !isZip(val)) {
      showError(input, 'ZIP code must be 4 digits (e.g. 1100).');
      return false;
    }
    
    if (name === 'dob') {
      const dob    = new Date(val);
      const today  = new Date();
      const minAge = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      if (dob > minAge) {
        showError(input, 'You must be at least 18 years old.');
        return false;
      }
    }
    
    if (['lastName', 'firstName', 'middleName'].includes(name)) {
      if (!isValidName(val)) {
        showError(input, 'Name must contain letters only.');
        return false;
      }
      if (val.length < 2 && required) {
        showError(input, 'Must be at least 2 characters.');
        return false;
      }
    }
    
    if (['barangay', 'city', 'province', 'street'].includes(name) && !isText(val)) {
      showError(input, 'Must be at least 2 characters.');
      return false;
    }
    
    markValid(input);
    return true;
  }
  
  function initializeEventListeners() {
    form.querySelectorAll('input, select').forEach((field) => {
      field.addEventListener('input',  () => clearError(field));
      field.addEventListener('change', () => validateField(field));
      field.addEventListener('blur',   () => validateField(field));
    });
  }
  
  function setDobMaxDate() {
    const dobInput = document.querySelector('[name="dob"]');
    if (dobInput) {
      const today  = new Date();
      const maxDob = new Date(today.getFullYear() - 18, today.getMonth(), today.getDate());
      dobInput.setAttribute('max', maxDob.toISOString().split('T')[0]);
    }
  }
  
  function handleFormSubmit(e) {
    e.preventDefault();
    let allValid = true;
    
    form.querySelectorAll('input[required], select[required]').forEach((field) => {
      if (!validateField(field)) {
        allValid = false;
      }
    });
    
    if (!allValid) {
      const firstInvalid = form.querySelector('.invalid');
      if (firstInvalid) {
        firstInvalid.focus();
        firstInvalid.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      return;
    }
    
    form.style.display = 'none';
    successMsg.classList.add('show');
  }
  
  function init() {
    if (!form || !successMsg) {
      console.error('Registration form or success message element not found');
      return;
    }
    
    setDobMaxDate();
    initializeEventListeners();
    form.addEventListener('submit', handleFormSubmit);
  }
  
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
