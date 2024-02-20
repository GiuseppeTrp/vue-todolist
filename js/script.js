const { createApp } = Vue;

createApp({
    data() {
        return {
            newTask: '',
            tasks: [
                { text: 'Lino Sasso', done: true },
                { text: 'Rino Manda', done: true },
                { text: 'Dario Lampa', done: false },
                { text: 'Felice Trapasso', done: true },
                { text: 'Daria Camera', done: false }
            ],
        }
    },

    methods: {
        deleteTask(taskIndex) {
            this.tasks.splice(taskIndex, 1);
        },

        addTask() {
            this.tasks.push({
                text: this.newTask, 
                done: false });
            this.newTask = "";
        },

        toggleDone(task) {
            task.done = !task.done;
        }
    
        
    },

       
    

}).mount("#app");
