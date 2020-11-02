
Vue.component('user-info', {
    props: ['user'],
    template: 
`
<div class="media m-4 p-4 z-depth-2">
    <img class="d-flex mr-3 rounded-circle z-depth-1" v-bind:src="user.avatar" alt="Generic placeholder image">
    <div class="media-body">
        <h5 class="mt-0 font-weight-bold">{{user.first_name + user.last_name}}</h5>
        <h6>{{user.email}}</h6>
    </div>
</div>
`,
})

let app = new Vue({
    el: "#kata",
    data: {
        users: [],
        page: 1,
    },
    async created() {
        this.users = await this.fetchTwoUserPages();
        this.handleDebouncedScroll = _.debounce(this.handleScroll, 500);
        window.addEventListener('scroll', this.handleDebouncedScroll);
    },
    watch: {

    },
    methods: {
        async fetchTwoUserPages() {
            firstSix = await this.fetchUsersOnPage(this.page++);
            nextSix = await this.fetchUsersOnPage(this.page++);
            return [...firstSix, ...nextSix];
        },
        async fetchUsersOnPage(page) {
            const res = await axios.get(`https://reqres.in/api/users?page=${page}`);
            return res.data.data;
        },
        async handleScroll(event) {
            this.page = this.page % 2;
            const newUsers = await this.fetchUsersOnPage(this.page++);
            this.users.push(...newUsers);
        }
    },
});
