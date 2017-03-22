<template>
	<div class="header">
		<div class="content-wrapper">
			<div class="avatar">
				<img width="64" height="64" :src="seller.avatar">
			</div>
			<div class="content">
				<div class="title">
					<span class="brand"></span>
					<span class="name">{{seller.name}}</span>
				</div>
				<div class="description">
					{{seller.description}}/{{seller.deliveryTime}}分钟送达
				</div>
				<div v-if="seller.supports" class="supports">
					<span class="icon"></span>
					<span>{{seller.supports[0].description}}</span>
				</div>	
			</div>
		</div>
		<div class="notice-wrapper"></div>
	</div>
</template>

<script>
	export default {
        props: {
	        seller: {
	            type: Object
            }
        }
	};
</script>

<style lang="scss" scoped>
	@import './../../common/mixins/mixins.scss';
	.header{
		color: #fff;
		background: #000;
		.content-wrapper{
			padding: 24px 12px 18px 24px;
			font-size: 0;
			.avatar{
				display: inline-block;
				font-size: 14px; 
			}
			.content{
				display: inline-block;
				font-size: 14px; 
				margin-left: 16px;
				.title{
					margin: 2px 0 8px 0;
					.brand{
						width: 30px;
						height: 18px;
						display: inline-block;
						vertical-align: top;
						@include background-img('./brand');
					}
					.name{
						margin-left: 6px;
						font-size: 16px;
						font-weight: bold;
						line-height: 18px;
					}
				}
				.description{
					margin: 2px 0 8px 0;
				}		
			} 
		}
	}
</style>

