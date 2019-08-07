<template>
    <layout page="Activity">
        <div class="activity-content">
            <line-chart :chartdata="chartData" :options="chartOptions"/>
        </div>
    </layout>
</template>
<script>
import Layout from "../../components/Layout/Layout.vue";
import LineChart from "../../components/Charts/LineChart.vue";

export default {
    name:"activity",
    components:{
        Layout, LineChart
    },
    data: () => ({
        chartData: {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Content created',
                    backgroundColor: '#d7e6fd',
                    data: [40, 20, 12, 39, 10, 40, 39, 80, 40, 20, 12, 11]
                },
                {
                    label: 'Content viewed',
                    backgroundColor: '#8ffca8',
                    data: [40, 39, 80, 40, 20, 12, 11,10, 50, 42, 20, 80]
                }
            ]
        },
        chartOptions: {
            responsive: true,
            maintainAspectRatio: false
        }
    }),
}
</script>
<style lang="scss" src="./Activity.scss"></style>
