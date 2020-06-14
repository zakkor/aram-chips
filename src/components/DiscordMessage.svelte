<script>
	export let nickname
	export let imageSrc
	export let date
</script>

<style>
	.bg {
		background-color: #36393f;
		border: 1px solid #292a30;
		@apply text-white flex w-full rounded-md py-3 pr-12;
	}
	span {
		line-height: 22px;
	}
	.text-nickname {
		color: #884da7;
		font-weight: 500;
		font-size: 1em;
		margin-right: 8px;
	}
	.text-date {
		color: #72767d;
		font-weight: 500;
		font-size: 0.875em;
		vertical-align: baseline;
	}
	.profile-pic {
		@apply rounded-full;
		width: 40px;
		height: 40px;
		margin-left: 16px;
		margin-right: 16px;
	}
</style>

<div class="bg">
	<img alt={nickname} src={imageSrc} class="profile-pic" />
	<div class="flex flex-col">
		<div>
			<span class="text-nickname">{nickname}</span>
			<span class="text-date">{date}</span>
		</div>

		<slot />
	</div>
</div>
