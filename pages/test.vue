<template></template>
<script>
import { Base64 } from 'js-base64';
import { encode, decode } from "@msgpack/msgpack";
import bs58 from 'bs58'
export default {
    data() {
        return {
            
        }
    },
    mounted() {
        var _data = {
            name : "NjdjOGE3YTcyOGMxY2IyNDYyYTAyNTE2",
            data : "NjdjOGE3YTcyOGMxY2IyNDYyYTAyNTE2"
        }
        var d = JSON.stringify(_data)

        console.log(d)

        var string = d
        var uint8 = Uint8Array.from(string.split("").map(x => x.charCodeAt()))

        var g =  bs58.encode(uint8)

        console.log(g)
    },
    methods:{
        
    }
    }
</script>