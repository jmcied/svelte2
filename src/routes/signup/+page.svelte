<script>
	import Header from '$lib/Header.svelte';
	import SignupForm from '$lib/SignupForm.svelte';
	import WelcomeNavigator from '$lib/WelcomeNavigator.svelte';
</script>

<Header>
	<WelcomeNavigator />
</Header>

<div class="columns">
	<div class="column">
		<div class="box">
			<h1 class="title">Sign Up</h1>
			<SignupForm />
		</div>
	</div>
	<div class="column has-text-centered">
		<img alt="walk 2" src="/walking2.jpg" width="300" />
	</div>
</div>
