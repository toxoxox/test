const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

const handleSignIn = async () => {
  try {
    // Start the sign in process
    await auth.signInWithRedirect(provider);
  } catch (error) {
    console.error('Sign in error:', error);
  }
};

// Handle the redirect result when the page loads
const handleRedirectResult = async () => {
  try {
    const result = await auth.getRedirectResult();
    if (result.user) {
      // User is signed in
      console.log('Signed in user:', result.user);
    }
  } catch (error) {
    console.error('Redirect result error:', error);
  }
};

// Call this when the page loads
window.addEventListener('load', handleRedirectResult);