export async function logout() {
	const res = await fetch('/logout', {
	  method: 'POST'
	});
  
	if (res.ok) {
	  window.location.href = '/login'; // or wherever you want to redirect
	} else {
	  alert('حدث خطأ أثناء تسجيل الخروج');
	}
  }
  