import React, {Component} from 'react';
import {View, Text, StyleSheet, ImageBackground, ScrollView} from "react-native";

export default class App extends React.Component {
    render() {
        return (
            <ScrollView style={{backgroundColor: 'white', flex: 1}}>
                <ImageBackground source={require('mobilecoprev/src/asset/TipsSatu.png')} style={styles.image}>
                </ImageBackground>
                <View style={{width: 390, padding: 15}}>
                    <Text style={styles.header}>Tips Agar Anak Tidak Bosan di Rumah Selama Pandemi Covid-19</Text>
                </View>
                <View style={{width: 400, paddingLeft: 20, paddingTop: 10}}>
                    <Text style={styles.judul}>Pandemi Covid-19 membuat anak-anak tidak bisa bermain di luar rumah atau pergi ke sekolah. Alhasil, banyak anak mengeluh bosan lantaran terus-menerus berada di dalam rumah. Nah, untuk mengusir kejenuhan anak selama ‘stay at home’, yuk, simak tips-tips berikut ini.</Text>
                    <Text style={styles.text}>Untuk menghentikan penyebaran <Text style={{color: '#0782F4'}}> virus Corona </Text>, pemerintah menganjurkan semua orang untuk melakukan physical distancing dan tidak berpergian ke luar rumah kecuali untuk keperluan mendesak. Anjuran ini bisa membuat anak-anak bosan karena harus belajar dari rumah dan tidak bisa melakukan kegiatan di luar rumah.</Text>
                    <Text style={styles.text}>Jenuhnya berada di rumah bukan tidak mungkin menyebabkan anak rewel atau bahkan menangis dan merengek-rengek minta keluar. Bila sudah seperti ini, tentu orang tua harus memutar otak untuk mencari cara agar anak betah berada di rumah.</Text>
                    <Text style={styles.text}>Berikut ini adalah beberapa tips yang bisa Bunda lakukan untuk mengusir rasa bosan Si Kecil saat harus tetap di rumah akibat pandemi Covid-19:</Text>
                    <Text style={styles.judul}>1. Berkreasi lewat seni</Text>
                    <Text style={styles.text}>Menggambar dan mewarnai bersama bisa menjadi kegiatan yang menyenangkan untuk mengusir kejenuhan anak. Selain mengajari anak untuk berkreasi dengan warna dan bentuk, menggambar dan mewarnai juga bisa membangun rasa percaya diri anak, melatih imajinasinya, dan membuatnya gembira.</Text>
                    <Text style={styles.text}>Tak hanya menggambar, Bunda juga bisa mengajak Si Kecil bermain musik, bernyanyi, dan menari bersama. Aktivitas ini dapat meningkatkan keterampilan motorik kasar anak serta koordinasi tangan dan matanya. Di samping itu, ketertarikan Si Kecil pada musik juga bisa tumbuh saat ia bernyanyi dan menari bersama Bunda.</Text>
                    <Text style={styles.judul}>2. Mencoba resep baru dan memasak bersama</Text>
                    <Text style={styles.text}>Momen ‘stay at home’ ini bisa Bunda manfaatkan untuk memasak bersama Si Kecil. Bunda bisa memilih resep makanan kesukaan Si Kecil dengan bahan yang sederhana dan mudah dibuat.</Text>
                    <Text style={styles.text}>Memasak bersama orang tua tidak hanya menyenangkan bagi anak, tapi juga membuatnya bisa belajar cara memasak makanan yang ia sukai. Namun, pastikan Si Kecil aman selama berada di dapur, ya, Bunda.</Text>
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    image: {
        height: 265,
        width: 415
    },
    header: {
        fontWeight: 'bold',
        fontSize: 27,
    },
    judul: {
        fontWeight: 'bold',
        fontSize: 16
    },
    text: {
        fontSize: 16
    },
    bluetext: {
        fontWeight: 'bold',
        color: '#0782F4'
    }
});

