(function () {
  const statusEl = document.getElementById('auth-status');
  const setupEl = document.getElementById('auth-setup-note');
  const signedOutEl = document.getElementById('auth-signed-out');
  const signedInEl = document.getElementById('auth-signed-in');
  const emailEl = document.getElementById('auth-user-email');
  const signOutBtn = document.getElementById('auth-signout');
  const loginForm = document.getElementById('login-form');
  const signupForm = document.getElementById('signup-form');
  const interestForm = document.getElementById('interest-form');
  const tabButtons = document.querySelectorAll('[data-auth-tab]');
  const tabPanels = document.querySelectorAll('[data-auth-panel]');

  function setStatus(message, type) {
    if (!statusEl) return;
    statusEl.textContent = message || '';
    statusEl.className = 'auth-status' + (type ? ' ' + type : '');
  }

  function switchTab(tab) {
    tabButtons.forEach((button) => {
      button.classList.toggle('is-active', button.dataset.authTab === tab);
    });
    tabPanels.forEach((panel) => {
      panel.hidden = panel.dataset.authPanel !== tab;
    });
  }

  tabButtons.forEach((button) => {
    button.addEventListener('click', function () {
      switchTab(button.dataset.authTab);
    });
  });

  const SUPABASE_URL = window.COLLECTIVIDUAL_SUPABASE_URL;
  const SUPABASE_ANON_KEY = window.COLLECTIVIDUAL_SUPABASE_ANON_KEY;

  if (!SUPABASE_URL || !SUPABASE_ANON_KEY || !window.supabase) {
    if (setupEl) setupEl.hidden = false;
    setStatus('Supabase is not configured yet. Add your project URL and anon key to activate sign in and sign up.', 'info');
    if (interestForm) {
      interestForm.addEventListener('submit', function (event) {
        event.preventDefault();
        setStatus('Auth is not configured yet. You can still wire this form after adding your Supabase keys.', 'info');
      });
    }
    return;
  }

  const client = window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

  async function refreshSession() {
    const { data, error } = await client.auth.getSession();
    if (error) {
      setStatus(error.message, 'error');
      return;
    }
    const session = data.session;
    if (session && session.user) {
      if (signedOutEl) signedOutEl.hidden = true;
      if (signedInEl) signedInEl.hidden = false;
      if (emailEl) emailEl.textContent = session.user.email || 'Signed in';
      setStatus('You are signed in.', 'success');
    } else {
      if (signedOutEl) signedOutEl.hidden = false;
      if (signedInEl) signedInEl.hidden = true;
      if (emailEl) emailEl.textContent = '';
      setStatus('You are currently signed out.', 'info');
    }
  }

  client.auth.onAuthStateChange(function () {
    refreshSession();
  });

  if (signupForm) {
    signupForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const fullName = signupForm.querySelector('[name="full_name"]').value.trim();
      const email = signupForm.querySelector('[name="email"]').value.trim();
      const password = signupForm.querySelector('[name="password"]').value;
      setStatus('Creating account…', 'info');
      const { error } = await client.auth.signUp({
        email,
        password,
        options: {
          data: { full_name: fullName }
        }
      });
      if (error) {
        setStatus(error.message, 'error');
        return;
      }
      signupForm.reset();
      setStatus('Account created. Check your email if confirmation is enabled.', 'success');
      switchTab('signin');
      refreshSession();
    });
  }

  if (loginForm) {
    loginForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const email = loginForm.querySelector('[name="email"]').value.trim();
      const password = loginForm.querySelector('[name="password"]').value;
      setStatus('Signing in…', 'info');
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) {
        setStatus(error.message, 'error');
        return;
      }
      loginForm.reset();
      setStatus('Signed in successfully.', 'success');
      refreshSession();
    });
  }

  if (signOutBtn) {
    signOutBtn.addEventListener('click', async function () {
      const { error } = await client.auth.signOut();
      if (error) {
        setStatus(error.message, 'error');
        return;
      }
      setStatus('Signed out.', 'success');
      refreshSession();
    });
  }

  if (interestForm) {
    interestForm.addEventListener('submit', async function (event) {
      event.preventDefault();
      const name = interestForm.querySelector('[name="name"]').value.trim();
      const email = interestForm.querySelector('[name="email"]').value.trim();
      const note = interestForm.querySelector('[name="note"]').value.trim();
      const { data: sessionData } = await client.auth.getSession();
      const createdBy = sessionData.session && sessionData.session.user ? sessionData.session.user.id : null;
      setStatus('Sending interest form…', 'info');
      const { error } = await client.from('join_requests').insert({
        name,
        email,
        note,
        created_by: createdBy
      });
      if (error) {
        setStatus(error.message, 'error');
        return;
      }
      interestForm.reset();
      setStatus('Your interest form has been sent.', 'success');
    });
  }

  switchTab('signup');
  refreshSession();
})();
