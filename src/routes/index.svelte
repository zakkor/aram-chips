<script>
	import DiscordMessage from '../components/DiscordMessage.svelte'

	const imageSrc = '/profile_pic.jpg'
	const nickname = 'John von Neumann'

	function newMessage(date, content) {
		return {
			type: 'textMessage',
			date,
			content,
		}
	}

	function newVideo(date, url) {
		return {
			type: 'videoMessage',
			date,
			url,
		}
	}

	function newUnreadMarker() {
		return {
			type: 'unreadMarker',
		}
	}

	const entries = [
		newMessage('17/06/2020', 'eu acuma mananc chipsuri<br>chipsuri cu bere<br>ce bune sunt'),
		newUnreadMarker(),
		newMessage(
			'15/06/2020',
			'otrava diavolească roade sufletul.<br>baga-mi-as pula in ele chipsuri.'
		),
		newVideo('13/06/2020', '/videos/supermarket.mp4'),
		newMessage('13/06/2020', 'bune-s chipsurile<br>si berea<br>be-re-a'),
		newMessage('11/06/2020', 'să mă fut în ele chipsuri.'),
		newMessage('02/06/2020', 'bleah.<br>mă piș pe ele chipsuri.'),
		newMessage('31/05/2020', 'ba chiar am cumparat chipsuri<br>2 feluri<br>sa bag?'),
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
	.unread-line {
		@apply absolute w-full border-b border-red-500;
		margin-top: 11px;
		z-index: -1;
	}
</style>

<svelte:head>
	<title>Aram Chips</title>
</svelte:head>

<div class="latest-container">
	<div class="latest-status space-y-2">
		{#each entries as entry}
			{#if entry.type === 'unreadMarker'}
				<div class="flex relative">
					<div class="unread-line" />
					<span
						class="mx-auto inline-block uppercase text-white bg-red-500 px-2 pt-1 rounded-lg
						font-semibold text-xs"
					>
						new
					</span>
				</div>
			{:else}
				<DiscordMessage {imageSrc} {nickname} date={entry.date}>
					{#if entry.type === 'textMessage'}
						{@html entry.content}
					{:else if entry.type === 'videoMessage'}
						<video class="mt-2 w-64" controls src={entry.url} />
					{/if}
				</DiscordMessage>
			{/if}
		{/each}
	</div>
</div>
