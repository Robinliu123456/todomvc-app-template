(function (window) {
	'use strict';

	// Your starting point. Enjoy the ride!
	new Vue({
		el: '#app',
		data:{
			//todos 用于存储所有事项信息
			todos:[
				{id:1,title:'示例内容1',completed:true},
				{id:2,title:'示例内容2',completed:false},
				{id:3,title:'示例内容3',completed:false}
			]
		},
		methods:{
			// pluralize: function(){
			// 	return this.todos.length > 1 ? 'items' : 'item'
			// }
			pluralize(){
				return this.remaining > 1 ? 'items' : 'item'
			}
		},
		computed:{
			// 用于获取剩余待办事项数
			remaining(){
				return this.todos.filter(
				// 	function(todo){
				// 	return !todo.completed
				// }
				(todo)=>{
           return !todo.completed
				}
				).length;
			}

		}


	})



})(window);
