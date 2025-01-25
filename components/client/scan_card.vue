<template>
    <v-row>
        <v-col cols="6">
            <v-card>
                <v-card-title>
                    Download this card for scanning the QR code.
                </v-card-title>
            </v-card>
        </v-col>
    </v-row>
    <v-row  align="center">
        <v-col >
            <v-card class="pa-2 ma-2" style="width:30vw;">
                <div id="qr_banner" style="padding: 30px;">
                    <h1 class="" style="text-align: center; margin-top: 10px; margin-bottom: 10px;">
                    {{ client_name }}
                    </h1>
                   
                    </br>
                    
                    <QRCodeVue3
                        
                        margin="15"
                     
                        :cornersSquareOptions="{ type: 'square', color: '#000000' }"
                        :cornersDotOptions="{ type: 'square', color: '#000000' }"
                        :qrOptions="{errorCorrectionLevel:'H'}"
                        :dotsOptions="{type: 'square', color: '#000000'}"
                        :backgroundOptions="{ color: '#ffffff' }"
                        value="Simple QR code"
                    />
                    <h1 style="margin-top: 10px; margin-bottom: 10px;">Please scan to get token</h1>
                    <h1 style="margin-top: 10px; margin-bottom: 10px;">TQue System</h1>
                    <h3>Powered by Triophore Technologies</h3>
                    <h5>https://triophore.com</h5>
                </div>
                <v-card-text style="margin: auto;">
                    
                    <!--vue-qrcode
                    style="width:100%; "
                        :value="qr_info"
                        errorCorrectionLevel="H"
                        /-->
                        
                </v-card-text>
              
                <v-card-actions>
                    <v-btn @click="downloadDivAsImage('qr_banner')">Download</v-btn>
                </v-card-actions>
            </v-card>
        </v-col>
    </v-row>
</template>

<script setup>
definePageMeta({
  layout: 'user' // Use the name of your layout component (without ".vue")
});
</script>

<script>
import html2canvas from 'html2canvas';
import QRCodeVue3 from "qrcode-vue3";
import VueQrcode from 'vue-qrcode'
export default {
    data() {
        return {
            client_name : "Test",
            qr_info : "https://tque_backend.triophore.com/hkasjdkasdhkasdhkasdhaksd/jkhaskdjhaskjdashdkasjdhkasd"
        }
    },
    components: {
        VueQrcode,
        QRCodeVue3
    },
    methods: {
        downloadDivAsImage(divId) {
            html2canvas(document.getElementById(divId),{
                useCORS: true,
                allowTaint: true, 
            }).then(function(canvas) {
                var link = document.createElement('a');
                link.download = 'div-content.png';
                link.href = canvas.toDataURL("image/png");
                link.click();
            });
        },
        download_banner(){
            this.printToFile(document.getElementById("qr_banner"))
        },
        downloadURI(uri, name) {
            var link = document.createElement("a");
            link.download = name;
            link.href = uri;
            link.click();
            //after creating link you should delete dynamic link
            // clearDynamicLink(link); 
        },
        printToFile(div) {
            var self = this;
            html2canvas(div).then(canvas => {
                var myImage = canvas.toDataURL();
                self.downloadURI(myImage, "MaSimulation.png");
            });
        }
    },  
}
</script>

<style>
#qr_banner h1 {
  text-align: center !important;
  color: black !important; 
  font-size: 48px !important;
}

#qr_banner h2 , h3 , h4 , h5 {
  text-align: center !important;
  color: black !important; 
}
#qr_banner img {
    margin-left: 8px;
    margin-right: auto;
    width: 30rem;
}
</style>