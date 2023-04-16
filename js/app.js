(function (window) {
	'use strict';
// 设置用于筛选不同类别事项的函数，并统一存储。
let filter = {
	all (todos){
		return todos
	},
	active (todos) {
		return todos.filter(todo=>!todo.completed)
	},
	completed (todos) {
		return todos.filter(todo=>todo.completed)
	}
}
	// Your starting point. Enjoy the ride!
	new Vue({
		el: '#app',
		data:{
			//todos 用于存储所有事项信息
			todos:[
				{id:1,title:'示例内容1',completed:true},
				{id:2,title:'示例内容2',completed:false},
				{id:3,title:'示例内容3',completed:false}
			],
			//存储新增输入框数据
			newTodo: '',
			//展示的todos
			// allTodos : this.todos,
			editingTodo: null,
			titileBeforeEdit: '',
			// 事件类型状态
			todoType: 'all'

		},
		methods:{
			// pluralize: function(){
			// 	return this.todos.length > 1 ? 'items' : 'item'
			// }
			pluralize(){
				return this.remaining > 1 ? 'items' : 'item'
			},
			addTodo(){
				let value = this.newTodo.trim();
				if(!this.newTodo){
					return;
				}
				this.todos.push({id:this.todos.length+1,title:value,completed:false});
				this.newTodo = '';
			},
			removeTodo(value){
				this.todos =  this.todos.filter( todo =>  {return todo.id!=value.id})
				// var index = this.todos.indexOf(todo);
				// this.todos.splice(index,1);
			},
			removeAllCompleted(){
				 this.todos =  this.todos.filter(todo=>{return !todo.completed})
			},

			editTodo(todo){
				this.editingTodo  = todo;
				this.titileBeforeEdit = todo.title
			},
			cancelEdit(todo){
				this.editingTodo = null;
				todo.title = this.titileBeforeEdit;
			},
			editDone(todo){
				this.editingTodo = null;
				if(todo.title){
					todo.title = todo.title.trim()
				}else{
					this.removeTodo(todo)
				}
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
			},
			allDone:{
				get(){
					return this.remaining === 0;
				},
				set(value){
					this.todos.forEach(todo => {
						todo.completed = value
					});
				}
			},
			filteredTodo () {
				return filter[this.todoType](this.todos)
			}

		},
		directives:{
			'todo-focus'(el,binding){
				// console.log(binding.value)
				if(binding.value){
					el.focus();
				}
			}
		}

	})



})(window);
