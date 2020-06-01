<script>
	import DiscordMessage from '../components/DiscordMessage.svelte'

	const imageSrc = '/profile_pic.jpg'
	const nickname = 'John von Neumann'

	function newMessage(date, content) {
		return {
			date,
			content,
		}
	}

	const messages = [
		newMessage('31/05/2020', 'ba chiar am cumparat chipsuri<br>2 feluri<br>sa bag?'),
		newMessage('29/05/2020', 'ieri am mâncat chipsuri de foame.'),
		newMessage('28/05/2020', 'trag pula-n chipsuri.<br>drăcie satanică.'),
		newMessage('13/05/2020', 'iar am mancat chipsuri'),
		newMessage('11/05/2020', 'Chipsuri si bere'),
		newMessage('10/05/2020', 'bleah<br>drăcia asta de chipsuri.<br>oribil.'),
		newMessage('08/05/2020', 'nu mai mananc chipsuri, bag pula.'),
		newMessage(
			'07/05/2020',
			'iar am mancat chipsuri<br>sa-mi trag pula<br>sunt mai rele ca orice patimă.'
		),
		newMessage('06/05/2020', 'deci acuma trebuie sa fac chipsuri'),
		newMessage('06/05/2020', 'cum fac să nu mai mănânc chipsuri?'),
		newMessage('05/05/2020', 'bleah<br>bag pula-n chipsuri<br>chipsurile sunt pentru ratati.'),
		newMessage('05/05/2020', 'oare exista chipsuri cu kombucha?'),
		newMessage('05/05/2020', 'o sa regret iar daca mananc chipsuri<br>sa le deschid?'),
		newMessage('05/05/2020', 'sa mananc chipsuri?'),
		newMessage('01/03/2020', 'iar am mancat chipsuri'),
		newMessage(
			'24/02/2020',
			'nu-s bune de nimic, sa-mi bag pula.<br>nu mai mananc niciodata chipsuri.'
		),
	]
</script>

<style>
	.latest-container {
		height: 100%;
		@apply flex items-center;
	}
	.latest-status {
		@apply mx-auto rounded-md py-4;
		@screen sm {
			transform: scale(1.5) translate(0, 16.5%);
		}
		@screen md {
			transform: scale(2) translate(0, 25%);
		}
	}
</style>

<svelte:head>
	<title>Aram Chips</title>
</svelte:head>

<div class="latest-container">
	<div class="latest-status space-y-2">
		{#each messages as message}
			<DiscordMessage {imageSrc} {nickname} date={message.date}>
				{@html message.content}
			</DiscordMessage>
		{/each}
	</div>
</div>
