import Header from "../components/Header.jsx";

function Login() {
    return(
<div class="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
  <div class="sm:mx-auto sm:w-full sm:max-w-sm">
    <Header title='Sign in to your account' subtitle=''/>
  </div>

  <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm font-serif">
    <form action="#" method="POST" class="space-y-6">
      <div>
        <label for="email" class="block text-sm/6 font-medium text-leaves">Email address</label>
        <div class="mt-2">
          <input id="email" type="email" name="email" required autocomplete="email" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-leaves outline-1 -outline-offset-1 outline-sage placeholder:text-nature focus:outline-2 focus:-outline-offset-2 focus:outline-nature sm:text-sm/6" />
        </div>
      </div>

      <div>
        <div class="flex items-center justify-between">
          <label for="password" class="block text-sm/6 font-medium text-leaves">Password</label>
          <div class="text-sm">
            <a href="#" class="font-semibold text-leaves hover:text-stone">Forgot password?</a>
          </div>
        </div>
        <div class="mt-2">
          <input id="password" type="password" name="password" required autocomplete="current-password" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-leaves outline-1 -outline-offset-1 outline-sage placeholder:text-nature focus:outline-2 focus:-outline-offset-2 focus:outline-nature sm:text-sm/6" />
        </div>
      </div>

      <div>
        <button type="submit" class="flex w-full justify-center rounded-md bg-leaves px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-stone focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-nature">Sign in</button>
      </div>
    </form>
  </div>
</div>
  );
}

export default Login;