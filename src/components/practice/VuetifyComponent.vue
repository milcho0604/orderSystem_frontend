<template>
    <v-app-bar app>
        네비게이션 바
    </v-app-bar>
    <!-- v-container, v-row, v-col -->
     <v-container>
        <v-row>
            <v-col cols='8'>
                helloworld1
            </v-col>

            <v-col cols='4'>
                helloworld2
            </v-col>
        </v-row>

        <v-row>
            <!-- v-card -->
             <v-card>
                <!-- card-title(제목), card-text(내용)) -->
                 <v-card-title>안내문구</v-card-title>
                 <v-card-text>안녕하세요</v-card-text>
             </v-card>
        </v-row>

        <v-row>
            <v-simple-table>
                <thead>
                    <tr>
                        <th>이름</th>
                        <th>이메일</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>hong1</td>
                        <td>hong1@naver.com</td>
                    </tr>
                    <tr>
                        <td>hong2</td>
                        <td>hong2naver.com</td>
                    </tr>
                </tbody>
            </v-simple-table>
        </v-row>
        
     </v-container>

     <v-card>
                <v-card-title>회원가입</v-card-title>
                <v-card-text>
                    <v-form>
                        <v-text-field
                        label="email"
                        type="text"
                        >
                        </v-text-field>

                        <v-text-field
                        label="name"
                        type="text"
                        >
                            
                        </v-text-field>
                        
                        <v-text-field
                        label="password"
                        type="password"
                        >
                        </v-text-field>
                        <v-btn color="primary">제출하기</v-btn>
                    </v-form>
                </v-card-text>
            </v-card>
            <br>
            <br>
            <v-btn @click.stop="cancel()">취소버튼</v-btn>
            <!-- 모달창을 위한 v-dialog -->
             <v-dialog v-model="dialog" max-width="400px">
            <v-card>
                <v-card-title>정말 취소하시겠습니가?</v-card-title>
            <v-card-actions>
                <v-btn color="primary">확인</v-btn>
                <v-btn color="secondary" @click="dialog=false">취소</v-btn>
            </v-card-actions>
        </v-card>
             </v-dialog>

            <v-btn href="/pratice/modeling">일반라우팅</v-btn>
            <v-btn :to="{path: '/pratice/modeling'}">SPA라우팅(router기능활용)</v-btn>
            <v-btn :to="{name: 'ModelingComponent'}">SPA라우팅(name호출)</v-btn>
</template>

<script>
export default{
    // 변수 설정 : data() 함수를 통해 변수 세팅
    data(){
        return{
            dialog:false,
        }
    },
    methods:{
        cancel(){
            this.dialog = true;
        }
    }
}
</script>