<template>
    <div class="home">
        <PageTitle icon="fa fa-home" main="Dashboard"
            sub="Knowledge base" />
        <div class="stats">
            <Stat title="Categories" :value="stat.categories"
                icon="fa fa-folder" color="#d54d50" />
            <Stat title="Articles" :value="stat.articles"
                icon="fa fa-file" color="#3bc480" />
            <Stat title="Users" :value="stat.users"
                icon="fa fa-user" color="#3282cd" />
            
        </div>

        <div class="stats">
            <Stat title="Facebook" :value="1000"
                icon="fa fa-facebook" color="blue" />
            <Stat title="Instagram" :value="2000"
                icon="fa fa-instagram" color="red" />
            <Stat title="Twitter" :value="1300"
                icon="fa fa-twitter" color="#00FFFF" />
        </div>
        
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import Stat from './Stat'
import axios from 'axios'
import { baseApiUrl } from '@/global'

export default {
    name: 'Home',
    components: {
         PageTitle, 
         Stat
         },
    data: function() {
        return {
            stat: {}
        }
    },
    methods: {
        getStats() {
            axios.get(`${baseApiUrl}/stats`).then(res => this.stat = res.data)
        }
    },
    mounted() {
        this.getStats()
    }

}
</script>

<style>
    .stats {
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
    }

    
</style>
