const {createApp} = Vue;

createApp({
    data() {
        return {

            newTask: '',

            tasks: [
                "Fare la spesa",
                "Pagare il commercialista",
                "Comprare l'ammorbidente"
            ],

        }
    },

    methods: {

        deleteTask(taskIndex) {
            // elimino dall'array tasks l'elemento che corrisponde all'indice riportato nel parametro

            this.tasks.splice(taskIndex, 1);

        },

        addTask() {

            // aggiungo il testo scritto dentro il campo di input alla lista dei task
            // testo del campo di input:
            // console.log(this.newTask)

            this.tasks.push(this.newTask)

            // cancello il contenuto del campo di input
            this.newTask = "";

        },
    },

}).mount("#app");