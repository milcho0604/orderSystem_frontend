<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12">
                <v-card-title class="text-center text-h5">
                    주문목록
                </v-card-title>
                <v-card-text>
                    <v-data-table 
                    :headers="tableHeaders"
                    :items="orderList"
                    class="elevation-1"
                    show-expand
                    >
                    <template v-slot:[`item.actions`]="{item}">
                        <v-btn color="red" v-if="isAdmin && item.orderStatus === 'ORDERED'" @click.stop="cancelOrder(item.id)" size="small">
                            CANCEL
                        </v-btn>
                    </template>
                    <template v-slot:expanded-row="{item}">
                        <v-row>
                            <v-col>
                                <v-list-item v-for="orderItem in item.orderDetailDtos" :key="orderItem.id">
                                    <v-list-item-content>
                                        <v-list-item-title>
                                            {{ orderItem.productName }} {{ orderItem.count }} 개

                                        </v-list-item-title>
                                    </v-list-item-content>
                                </v-list-item>
                            </v-col>
                        </v-row>

                    </template>

                    </v-data-table>
                </v-card-text>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import axios from 'axios';

// import OrderList from '@/views/OrderList.vue';

export default{
    props: ['isAdmin'],
    data() {
        return {
            orderList: [],
            tableHeaders:[
                {title:'ID',key: 'id', align: 'start'},
                {title:'회원이메일', key:'memberEmail', align:'start'},
                {title:'주문상태', key:'orderStatus', align:'start'},
                {title:'Action', key:'actions', align:'start'},
            ],
        }
    },
    async created(){
        if(this.isAdmin){
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/order/list`)
        this.orderList = response.data.result
        }else{
        const response = await axios.get(`${process.env.VUE_APP_API_BASE_URL}/order/myOrders`)
        this.orderList = response.data.result
        }
    },
    methods:{
        async cancelOrder(id){
            try{
                await axios.patch(`${process.env.VUE_APP_API_BASE_URL}/order/cancel/${id}`)
                alert("주문이 최소되었습니다.")
                window.location.reload();
            }catch(e){
                console.log(e)
                alert("주문취소에 실패했습니다. 다시 시도해주세요.")
            }
        }
    }
}
</script>