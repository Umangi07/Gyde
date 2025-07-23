'use client';

import Head from "next/head";
import Image from "next/image";
import './globals.css';

type ServiceCardProps = {
  image: string;
  alt: string;
  title: string;
  description: string;
  bullets: string[];
};

function ServiceCard({ image, alt, title, description, bullets }: ServiceCardProps) {
  return (
    <div className="bg-[#1A1A1A] border border-[#D4AF37]/20 rounded-2xl p-8 flex flex-col shadow-xl">
      <Image
        src={image}
        alt={alt}
        width={600}
        height={350}
        className="rounded-xl object-cover mb-5 w-full h-52"
      />
      <h3 className="text-2xl font-serif text-[#D4AF37] mb-2">{title}</h3>
      <p className="text-gray-300 mb-4">{description}</p>
      <ul className="list-disc list-inside text-sm text-gray-400 mb-4 space-y-1">
        {bullets.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      <a
        href="#"
        className="text-[#D4AF37] font-medium hover:underline mt-auto text-sm"
      >
        Learn More →
      </a>
    </div>
  );
}
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      <Head>
        <title>Conquerse - Luxurious Transportation Redefined</title>
        <meta name="description" content="Bespoke luxury travel solutions for executives and discerning travelers. Private jets, yachts, ground transport, and concierge services." />
        <meta name="keywords" content="luxury travel, concierge, private jet, yacht charter, executive transport" />
        <link rel="canonical" href="https://conquerse.com/" />
        <meta property="og:title" content="Conquerse - Luxurious Transportation Redefined" />
        <meta property="og:description" content="Bespoke luxury travel solutions for executives and discerning travelers." />
        <meta property="og:url" content="https://conquerse.com/" />
        <meta property="og:type" content="website" />
      </Head>
      {/* Header */}
      <header className="w-full bg-black/95 border-b border-gold/20 shadow-lg fixed top-0 left-0 z-50">
        <nav className="flex justify-between items-center px-8 py-4 max-w-7xl mx-auto">
          <div className="flex items-center gap-2">
            <span className="text-3xl font-serif font-bold text-gold tracking-widest">
            <svg width="204" height="36" viewBox="0 0 204 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.9577 0C92.1916 0 94.1964 0.429594 95.9721 1.28878C97.7477 2.11933 99.2513 3.22196 100.483 4.59666C101.743 5.94272 102.702 7.47494 103.361 9.19332C104.048 10.9117 104.392 12.6587 104.392 14.4344C104.392 15.7232 104.263 16.9117 104.005 18C103.748 19.0883 103.39 20.0907 102.931 21.0072C102.473 21.9236 101.943 22.7685 101.342 23.5418C100.769 24.2864 100.139 24.9737 99.4518 25.6038L100.869 27.1933C101.986 28.2243 103.204 29.1408 104.521 29.9427C105.838 30.7733 107.17 31.4606 108.516 32.0048C109.862 32.5776 111.194 33.0072 112.511 33.2936C113.829 33.58 115.032 33.7231 116.12 33.7231C117.065 33.7231 118.068 33.6372 119.127 33.4654C120.215 33.2936 121.304 33.0358 122.392 32.6921C123.509 32.3484 124.612 31.8902 125.7 31.3174C126.788 30.7733 127.819 30.1146 128.793 29.3413L129.051 29.7279C128.106 30.7589 127.046 31.6611 125.872 32.4344C124.698 33.2363 123.466 33.895 122.177 34.4105C120.889 34.926 119.557 35.3126 118.182 35.5704C116.836 35.8568 115.504 36 114.187 36C112.869 36 111.552 35.8854 110.235 35.6563C108.917 35.4272 107.6 35.0406 106.282 34.4964C104.965 33.9523 103.647 33.2076 102.33 32.2625C101.013 31.3461 99.6952 30.1862 98.3778 28.7828L96.9172 27.2363C96.4303 27.5513 95.8718 27.8377 95.2417 28.0955C94.6403 28.3246 93.9959 28.5251 93.3086 28.6969C92.6212 28.8687 91.9195 28.9976 91.2036 29.0835C90.4876 29.1695 89.8145 29.2124 89.1845 29.2124C87.1797 29.2124 85.3181 28.8115 83.5997 28.0095C81.91 27.179 80.4351 26.105 79.1749 24.7876C77.9434 23.4415 76.9697 21.9093 76.2537 20.1909C75.5377 18.4726 75.1797 16.7112 75.1797 14.9069C75.1797 13.074 75.509 11.2697 76.1678 9.49403C76.8265 7.68974 77.7859 6.08592 79.046 4.68258C80.3348 3.27924 81.8957 2.14797 83.7286 1.28878C85.5616 0.429594 87.6379 0 89.9577 0ZM89.9148 27.7088C91.8336 27.6229 93.5234 27.1933 94.984 26.42C96.4446 25.6181 97.6475 24.6157 98.5926 23.4129C99.5663 22.1814 100.297 20.8353 100.784 19.3747C101.27 17.9141 101.514 16.4821 101.514 15.0788C101.514 13.5036 101.213 11.9141 100.612 10.3103C100.039 8.6778 99.2227 7.21718 98.163 5.9284C97.132 4.61098 95.8718 3.55131 94.3826 2.7494C92.8933 1.91885 91.2465 1.50358 89.4422 1.50358C87.6666 1.50358 86.0627 1.90453 84.6308 2.70644C83.2274 3.47971 82.0389 4.4821 81.0651 5.7136C80.0914 6.94511 79.3468 8.31981 78.8312 9.83771C78.3157 11.327 78.058 12.8019 78.058 14.2625C78.058 15.8377 78.3444 17.4272 78.9172 19.031C79.5186 20.6348 80.3491 22.0811 81.4088 23.3699C82.4685 24.6587 83.7143 25.7041 85.1463 26.506C86.6069 27.3079 88.1964 27.7088 89.9148 27.7088Z" fill="#BF872D"/>
<path d="M107.398 0H113.499V0.429594H113.284C113.055 0.429594 112.854 0.515512 112.682 0.68735C112.511 0.830548 112.353 1.01671 112.21 1.24582C112.095 1.47494 112.009 1.71838 111.952 1.97613C111.895 2.23389 111.866 2.46301 111.866 2.66348V19.6325C111.866 20.7494 111.981 21.7804 112.21 22.7255C112.439 23.6706 112.826 24.4869 113.37 25.1742C113.914 25.8616 114.63 26.4057 115.518 26.8067C116.406 27.179 117.494 27.3652 118.783 27.3652C120.215 27.3652 121.36 27.136 122.219 26.6778C123.079 26.2196 123.737 25.6325 124.196 24.9165C124.654 24.1718 124.955 23.3413 125.098 22.4248C125.241 21.5084 125.313 20.6062 125.313 19.7184V2.66348C125.313 2.46301 125.284 2.23389 125.227 1.97613C125.169 1.71838 125.069 1.47494 124.926 1.24582C124.811 1.01671 124.668 0.830548 124.496 0.68735C124.324 0.515512 124.138 0.429594 123.938 0.429594H123.723V0H128.406V0.429594H128.191C127.962 0.429594 127.761 0.515512 127.589 0.68735C127.446 0.830548 127.303 1.01671 127.16 1.24582C127.045 1.47494 126.959 1.71838 126.902 1.97613C126.845 2.23389 126.816 2.46301 126.816 2.66348V19.5895C126.816 21.4511 126.587 22.9833 126.129 24.1862C125.671 25.3604 125.04 26.2912 124.239 26.9785C123.437 27.6659 122.492 28.1384 121.403 28.3962C120.344 28.6539 119.212 28.7828 118.009 28.7828C116.721 28.7828 115.518 28.6396 114.401 28.3532C113.313 28.0955 112.367 27.6229 111.565 26.9356C110.764 26.2482 110.134 25.3174 109.675 24.1432C109.217 22.9403 108.988 21.4368 108.988 19.6325V2.66348C108.988 2.46301 108.959 2.23389 108.902 1.97613C108.845 1.71838 108.745 1.47494 108.601 1.24582C108.487 1.01671 108.344 0.830548 108.172 0.68735C108 0.515512 107.814 0.429594 107.613 0.429594H107.398V0Z" fill="#BF872D"/>
<path d="M152.621 27.9236H152.836V28.3532H146.778V27.9236H146.993C147.194 27.9236 147.38 27.8377 147.552 27.6659C147.723 27.494 147.867 27.2936 147.981 27.0644C148.124 26.8353 148.225 26.5919 148.282 26.3341C148.339 26.0477 148.368 25.79 148.368 25.5609V2.66348C148.368 2.46301 148.339 2.23389 148.282 1.97613C148.225 1.71838 148.124 1.47494 147.981 1.24582C147.867 1.01671 147.723 0.830548 147.552 0.68735C147.38 0.515512 147.194 0.429594 146.993 0.429594H146.778V0H154.253C157.117 0 159.322 0.558472 160.869 1.67542C162.444 2.79236 163.232 4.43914 163.232 6.61575C163.232 7.70406 163.046 8.66348 162.673 9.49403C162.33 10.2959 161.857 10.9976 161.256 11.599C160.654 12.1718 159.938 12.6444 159.108 13.0167C158.306 13.3604 157.447 13.6181 156.53 13.79L159.623 18.5155C160.368 19.6611 161.127 20.7924 161.9 21.9093C162.673 22.9976 163.432 24.1289 164.177 25.3031C164.377 25.5895 164.592 25.8902 164.821 26.2052C165.079 26.5203 165.337 26.8067 165.595 27.0644C165.881 27.3222 166.167 27.537 166.454 27.7088C166.769 27.852 167.084 27.9236 167.399 27.9236V28.3532H165.552C164.406 28.3532 163.461 28.0811 162.716 27.537C162 26.9642 161.399 26.3055 160.912 25.5609C159.623 23.6706 158.334 21.7518 157.046 19.8043C155.785 17.8568 154.525 15.9379 153.265 14.0477C152.95 14.0191 152.606 13.9905 152.234 13.9618C151.89 13.9045 151.561 13.8473 151.246 13.79V25.5609C151.246 25.79 151.275 26.0477 151.332 26.3341C151.389 26.5919 151.475 26.8353 151.59 27.0644C151.733 27.2936 151.876 27.494 152.019 27.6659C152.191 27.8377 152.392 27.9236 152.621 27.9236ZM151.246 1.46062V12.3723H151.461C151.69 12.401 152.048 12.4296 152.535 12.4582C153.05 12.4582 153.68 12.4582 154.425 12.4582C155.027 12.4582 155.657 12.3723 156.315 12.2005C157.003 12 157.633 11.685 158.206 11.2554C158.807 10.7971 159.294 10.21 159.666 9.49403C160.067 8.77804 160.268 7.87589 160.268 6.78759C160.268 5.69928 160.053 4.81146 159.623 4.12411C159.222 3.43675 158.649 2.8926 157.905 2.49165C157.189 2.09069 156.315 1.81861 155.284 1.67542C154.253 1.53222 153.122 1.46062 151.89 1.46062H151.246Z" fill="#BF872D"/>
<path d="M186.043 21.179C186.043 22.611 185.757 23.8425 185.184 24.8735C184.611 25.8759 183.866 26.6921 182.95 27.3222C182.062 27.9523 181.045 28.4105 179.9 28.6969C178.783 28.9833 177.666 29.1265 176.549 29.1265C175.403 29.1265 174.415 29.0119 173.585 28.7828C172.754 28.5537 171.995 28.3389 171.308 28.1384C170.85 27.9952 170.434 27.8807 170.062 27.7947C169.69 27.6802 169.317 27.6229 168.945 27.6229V22.7255H169.375C169.375 23.8138 169.647 24.6873 170.191 25.3461C170.764 25.9761 171.422 26.463 172.167 26.8067C172.912 27.1504 173.656 27.3795 174.401 27.494C175.146 27.58 175.69 27.6229 176.033 27.6229C177.265 27.6229 178.325 27.4511 179.212 27.1074C180.1 26.7351 180.831 26.2625 181.403 25.6897C181.976 25.0883 182.391 24.4296 182.649 23.7136C182.936 22.9976 183.079 22.2673 183.079 21.5227C183.079 20.5776 182.878 19.79 182.477 19.1599C182.076 18.5012 181.547 17.9284 180.888 17.4415C180.258 16.9547 179.528 16.5394 178.697 16.1957C177.866 15.852 177.022 15.5084 176.162 15.1647C175.189 14.7924 174.229 14.4057 173.284 14.0048C172.339 13.6038 171.494 13.1169 170.749 12.5442C170.005 11.9427 169.403 11.241 168.945 10.4391C168.487 9.60859 168.258 8.59188 168.258 7.38902C168.258 6.12888 168.501 5.04057 168.988 4.12411C169.475 3.179 170.119 2.40573 170.921 1.8043C171.752 1.20286 172.683 0.758949 173.714 0.472553C174.773 0.157518 175.847 0 176.936 0C177.68 0 178.382 0.0572793 179.041 0.171838C179.699 0.257756 180.329 0.372314 180.931 0.515512C181.418 0.63007 181.89 0.730309 182.349 0.816229C182.807 0.873507 183.251 0.902147 183.68 0.902147V5.32697H183.251C183.193 3.83771 182.606 2.83532 181.489 2.31981C180.372 1.77565 178.826 1.50358 176.85 1.50358C175.704 1.50358 174.759 1.70406 174.014 2.10501C173.298 2.47733 172.726 2.94988 172.296 3.52267C171.866 4.06683 171.566 4.66826 171.394 5.32697C171.251 5.95704 171.179 6.51551 171.179 7.00239C171.179 7.80429 171.351 8.49165 171.695 9.06444C172.067 9.63723 172.554 10.1384 173.155 10.568C173.757 10.9976 174.444 11.3842 175.217 11.7279C176.019 12.0716 176.85 12.401 177.709 12.716C178.683 13.0883 179.671 13.4893 180.673 13.9189C181.675 14.3484 182.563 14.8783 183.337 15.5084C184.138 16.1384 184.783 16.9117 185.27 17.8282C185.785 18.7446 186.043 19.8616 186.043 21.179Z" fill="#BF872D"/>
<path d="M186.158 27.9236H186.373C186.602 27.9236 186.803 27.852 186.974 27.7088C187.146 27.537 187.289 27.3365 187.404 27.1074C187.547 26.8783 187.647 26.6348 187.705 26.3771C187.791 26.1193 187.834 25.8759 187.834 25.6468V2.66348C187.834 2.46301 187.791 2.23389 187.705 1.97613C187.647 1.71838 187.547 1.47494 187.404 1.24582C187.289 1.01671 187.146 0.830548 186.974 0.68735C186.803 0.515512 186.602 0.429594 186.373 0.429594H186.158V0H202.698V3.99523H202.268C202.211 3.33651 201.953 2.76372 201.495 2.27685C201.036 1.76134 200.32 1.50358 199.347 1.50358H190.712V12.3723H197.843C198.502 12.3723 199.046 12.1718 199.476 11.7709C199.934 11.3699 200.163 10.8974 200.163 10.3532H200.593V15.7232H200.163C200.163 15.2076 199.948 14.7637 199.519 14.3914C199.089 14.0191 198.531 13.8329 197.843 13.8329H190.712V26.8496H200.12C200.664 26.8496 201.137 26.7208 201.538 26.463C201.939 26.2052 202.268 25.9045 202.526 25.5609C202.812 25.1885 203.013 24.8019 203.127 24.401C203.27 23.9714 203.342 23.6134 203.342 23.327H203.772V28.3532H186.158V27.9236Z" fill="#BF872D"/>
<path d="M128.879 27.9236H129.094C129.323 27.9236 129.523 27.852 129.695 27.7088C129.867 27.537 130.01 27.3365 130.125 27.1074C130.268 26.8783 130.368 26.6348 130.425 26.3771C130.511 26.1193 130.554 25.8759 130.554 25.6468V2.66348C130.554 2.46301 130.511 2.23389 130.425 1.97613C130.368 1.71838 130.268 1.47494 130.125 1.24582C130.01 1.01671 129.867 0.830548 129.695 0.68735C129.523 0.515512 129.323 0.429594 129.094 0.429594H128.879V0H145.418V3.99523H144.989C144.931 3.33651 144.674 2.76372 144.215 2.27685C143.757 1.76134 143.041 1.50358 142.067 1.50358H133.433V12.3723H140.564C141.223 12.3723 141.767 12.1718 142.196 11.7709C142.655 11.3699 142.884 10.8974 142.884 10.3532H143.313V15.7232H142.884C142.884 15.2076 142.669 14.7637 142.239 14.3914C141.81 14.0191 141.251 13.8329 140.564 13.8329H133.433V26.8496H142.841C143.385 26.8496 143.857 26.7208 144.258 26.463C144.659 26.2052 144.989 25.9045 145.246 25.5609C145.533 25.1885 145.733 24.8019 145.848 24.401C145.991 23.9714 146.063 23.6134 146.063 23.327H146.492V28.3532H128.879V27.9236Z" fill="#BF872D"/>
<path d="M56.6054 27.9236H56.8202V28.3532H52.0517V27.9236H52.2665C52.467 27.9236 52.6532 27.8377 52.825 27.6659C53.0255 27.494 53.183 27.2936 53.2976 27.0644C53.4121 26.8353 53.498 26.5919 53.5553 26.3341C53.6412 26.0477 53.6842 25.79 53.6842 25.5609V2.66348C53.6842 2.46301 53.6556 2.23389 53.5983 1.97613C53.5696 1.71838 53.498 1.47494 53.3835 1.24582C53.2689 1.01671 53.1114 0.830548 52.9109 0.68735C52.7105 0.515512 52.467 0.429594 52.1806 0.429594H51.9658V0H56.3047L71.899 24.5728V2.66348C71.899 2.46301 71.856 2.23389 71.7701 1.97613C71.7128 1.71838 71.6126 1.47494 71.4694 1.24582C71.3548 1.01671 71.2116 0.830548 71.0398 0.68735C70.868 0.515512 70.6675 0.429594 70.4384 0.429594H70.2236V0H75.035V0.429594H74.8202C74.5911 0.429594 74.3906 0.515512 74.2188 0.68735C74.047 0.830548 73.8894 1.01671 73.7462 1.24582C73.6317 1.47494 73.5458 1.71838 73.4885 1.97613C73.4312 2.23389 73.4026 2.46301 73.4026 2.66348V15.5084V28.3532H70.7391L55.1878 3.69451V25.5609C55.1878 25.79 55.2164 26.0477 55.2737 26.3341C55.331 26.5919 55.4169 26.8353 55.5315 27.0644C55.6747 27.2936 55.8322 27.494 56.004 27.6659C56.1758 27.8377 56.3763 27.9236 56.6054 27.9236Z" fill="#BF872D"/>
<path d="M15.3795 1.54654C13.2601 1.54654 11.4129 1.93317 9.83771 2.70644C8.29117 3.45107 7.00239 4.43914 5.97136 5.67064C4.94033 6.87351 4.16707 8.23389 3.65155 9.75179C3.16468 11.2697 2.92124 12.7733 2.92124 14.2625C2.92124 15.9523 3.2506 17.6134 3.90931 19.2458C4.56802 20.8496 5.47017 22.2816 6.61575 23.5418C7.78997 24.7733 9.15036 25.7757 10.6969 26.5489C12.2434 27.2936 13.9189 27.6659 15.7232 27.6659C16.2387 27.6659 16.8401 27.6086 17.5274 27.494C18.2434 27.3795 18.9451 27.1647 19.6325 26.8496C20.3198 26.506 20.9499 26.0334 21.5227 25.432C22.1241 24.8305 22.5823 24.043 22.8974 23.0692H23.327V27.8377C22.8974 27.8377 22.4391 27.895 21.9523 28.0095C21.494 28.1241 20.9785 28.253 20.4057 28.3962C19.6611 28.5967 18.8305 28.7828 17.9141 28.9547C17.0263 29.1265 16.0811 29.2124 15.0788 29.2124C12.5871 29.2124 10.3962 28.7828 8.50597 27.9236C6.61575 27.0644 5.04057 25.9475 3.78043 24.5728C2.52029 23.1981 1.57518 21.6515 0.945107 19.9332C0.315035 18.1862 0 16.4248 0 14.6492C0 12.8735 0.315035 11.1122 0.945107 9.36515C1.57518 7.61814 2.53461 6.05728 3.82339 4.68258C5.11217 3.27924 6.73031 2.14797 8.6778 1.28878C10.6253 0.429594 12.9165 0 15.5513 0C16.4964 0 17.3413 0.0859186 18.0859 0.257756C18.8592 0.429593 19.5465 0.601431 20.148 0.77327C20.5776 0.916468 20.9642 1.03103 21.3079 1.11694C21.6802 1.17422 22.0382 1.20286 22.3819 1.20286V5.97136H21.9523C21.7804 5.08353 21.4654 4.35322 21.0072 3.78043C20.5489 3.179 20.0048 2.72076 19.3747 2.40573C18.7733 2.09069 18.1146 1.8759 17.3986 1.76134C16.7112 1.61814 16.0382 1.54654 15.3795 1.54654Z" fill="#BF872D"/>
<path d="M38 26C36.34 26 34.78 25.6848 33.32 25.0544C31.86 24.424 30.59 23.5692 29.51 22.49C28.43 21.4108 27.5752 20.1408 26.9456 18.68C26.316 17.2192 26.0008 15.6592 26 14C25.9992 12.3408 26.3144 10.7808 26.9456 9.32C27.5768 7.8592 28.4316 6.5892 29.51 5.51C30.5884 4.4308 31.8584 3.576 33.32 2.9456C34.7816 2.3152 36.3416 2 38 2C39.6584 2 41.2184 2.3152 42.68 2.9456C44.1416 3.576 45.4116 4.4308 46.49 5.51C47.5684 6.5892 48.4236 7.8592 49.0556 9.32C49.6876 10.7808 50.0024 12.3408 50 14C49.9976 15.6592 49.6824 17.2192 49.0544 18.68C48.4264 20.1408 47.5716 21.4108 46.49 22.49C45.4084 23.5692 44.1384 24.4244 42.68 25.0556C41.2216 25.6868 39.6616 26.0016 38 26ZM38 23.6C40.68 23.6 42.95 22.67 44.81 20.81C46.67 18.95 47.6 16.68 47.6 14C47.6 13.86 47.5952 13.7148 47.5856 13.5644C47.576 13.414 47.5708 13.2892 47.57 13.19C47.47 13.77 47.2 14.25 46.76 14.63C46.32 15.01 45.8 15.2 45.2 15.2H42.8C42.14 15.2 41.5752 14.9652 41.1056 14.4956C40.636 14.026 40.4008 13.4608 40.4 12.8V11.6H35.6V9.2C35.6 8.54 35.8352 7.9752 36.3056 7.5056C36.776 7.036 37.3408 6.8008 38 6.8H39.2C39.2 6.34 39.3252 5.9352 39.5756 5.5856C39.826 5.236 40.1308 4.9508 40.49 4.73C40.09 4.63 39.6852 4.55 39.2756 4.49C38.866 4.43 38.4408 4.4 38 4.4C35.32 4.4 33.05 5.33 31.19 7.19C29.33 9.05 28.4 11.32 28.4 14H34.4C35.72 14 36.85 14.47 37.79 15.41C38.73 16.35 39.2 17.48 39.2 18.8V20H35.6V23.3C36 23.4 36.3952 23.4752 36.7856 23.5256C37.176 23.576 37.5808 23.6008 38 23.6Z" fill="white"/>
</svg>

            </span>
          </div>
          <ul className="flex items-center space-x-8">
            <li><a href="#services" className="text-lg text-white hover:text-gold transition">Services</a></li>
            <li><a href="#about" className="text-lg text-white hover:text-gold transition">About Us</a></li>
            <li><a href="#contact" className="text-lg text-white hover:text-gold transition">Contact Us</a></li>
          </ul>
          <a href="#reserve" className="ml-8 px-3 py-2 rounded-full bg-gradient-to-r from-gold to-yellow-400 text-black font-semibold shadow hover:from-yellow-400 hover:to-gold transition">Reserve Now</a>
        </nav>
      </header>
      <section
  className="relative flex items-center min-h-[90vh] pt-32 pb-16"
  style={{
    position: "relative",
    overflow: "hidden",
  }}
>
  {/* Video background */}
  <video
    autoPlay
    loop
    muted
    playsInline
    className="absolute inset-0 w-full h-full object-cover z-0"
    src="/hero.mp4"
  />
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-gradient-to-br from-black/90 to-black/60 z-10" />
  <div className="relative z-20 flex flex-col md:flex-row max-w-7xl mx-auto w-full px-8">
    {/* Left: Main Hero */}
    <div className="flex-1 flex flex-col justify-center">
      <div className="inline-block bg-gold/20 border border-gold text-gold px-3 py-2 rounded-full text-sm tracking-wider mb-8 w-fit">
        Trusted by 500+ Executives
      </div>
      <h1 className="text-6xl font-bold mb-4 leading-tight">
        Luxurious <br />
        <span style={{ color: '#D4AF37' }}>Transportation</span> <br />
        Redefined
      </h1>
      <p className="text-xl text-gray-200 mb-8 max-w-xl">
        Elevate your journey with bespoke luxury travel solutions. From boardroom to destination, we orchestrate seamless experiences for discerning leaders who demand nothing less than perfection.
      </p>
      <div className="flex gap-4 mb-10">
        <a
          href="#reserve"
          className="bg-gold text-black px-8 py-4 rounded-md font-semibold text-lg shadow hover:bg-yellow-400 transition flex items-center gap-2"
        >
          Reserve Your Experience <span>→</span>
        </a>
        <a
          href="#services"
          className="border-2 border-gold text-gold px-8 py-4 rounded-md font-semibold text-lg bg-black/60 hover:bg-gold hover:text-black transition"
        >
          Our Services
        </a>
      </div>
      {/* Stats Row */}
      <div className="flex gap-12 mt-8">
        <div className="flex flex-col items-center">
          <span className="text-gold text-3xl mb-1">
            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M11.9997 15.3338L14.6663 18.0005L20.6663 12.0005M26.6663 16.0005C26.6663 22.5451 19.5277 27.305 16.9303 28.8203C16.6351 28.9925 16.4875 29.0786 16.2792 29.1233C16.1176 29.158 15.8818 29.158 15.7201 29.1233C15.5118 29.0786 15.3642 28.9925 15.069 28.8203C12.4716 27.305 5.33301 22.5451 5.33301 16.0005V9.62395C5.33301 8.55793 5.33301 8.02492 5.50735 7.56675C5.66137 7.162 5.91165 6.80085 6.23655 6.51452C6.60433 6.1904 7.10341 6.00325 8.10155 5.62894L15.2506 2.94804C15.5278 2.8441 15.6664 2.79212 15.809 2.77152C15.9355 2.75324 16.0639 2.75324 16.1904 2.77152C16.3329 2.79212 16.4715 2.8441 16.7487 2.94804L23.8978 5.62894C24.8959 6.00325 25.395 6.1904 25.7628 6.51452C26.0877 6.80085 26.338 7.162 26.492 7.56675C26.6663 8.02492 26.6663 8.55793 26.6663 9.62395V16.0005Z" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </span>
          <span className="font-bold text-lg">100%</span>
          <span className="text-gray-400 text-sm">Privacy Assured</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gold text-3xl mb-1"><svg width="33" height="33" viewBox="0 0 33 33" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.9808 30.2741C24.3446 30.2741 30.3141 24.3046 30.3141 16.9408C30.3141 9.57696 24.3446 3.60742 16.9808 3.60742C9.617 3.60742 3.64746 9.57696 3.64746 16.9408C3.64746 24.3046 9.617 30.2741 16.9808 30.2741Z" stroke="#BF872D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M16.9805 8.94141V16.9414L22.3138 19.6081" stroke="#BF872D" stroke-width="2.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span className="font-bold text-lg">24/7</span>
          <span className="text-gray-400 text-sm">Concierge Support</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-gold text-3xl mb-1"><svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M20.0003 3.27642C18.7376 2.87982 17.3939 2.66602 16.0003 2.66602C8.63653 2.66602 2.66699 8.63555 2.66699 15.9993C2.66699 23.3631 8.63653 29.3327 16.0003 29.3327C23.3641 29.3327 29.3337 23.3631 29.3337 15.9993C29.3337 13.7122 28.7578 11.5596 27.7432 9.67861M22.667 7.66602H22.6737M14.0004 29.1837L14.0005 26.2459C14.0005 26.0868 14.0575 25.9329 14.161 25.8121L17.4754 21.9452C17.7478 21.6274 17.6634 21.1402 17.3 20.9325L13.4917 18.7563C13.3882 18.6972 13.3025 18.6114 13.2434 18.5079L10.7609 14.1575C10.6317 13.9311 10.3824 13.8008 10.1228 13.8239L2.75257 14.4803M28.0003 7.99935C28.0003 10.9449 25.3337 13.3327 22.667 15.9993C20.0003 13.3327 17.3337 10.9449 17.3337 7.99935C17.3337 5.05383 19.7215 2.66602 22.667 2.66602C25.6125 2.66602 28.0003 5.05383 28.0003 7.99935ZM23.0003 7.66602C23.0003 7.85011 22.8511 7.99935 22.667 7.99935C22.4829 7.99935 22.3337 7.85011 22.3337 7.66602C22.3337 7.48192 22.4829 7.33268 22.667 7.33268C22.8511 7.33268 23.0003 7.48192 23.0003 7.66602Z" stroke="#BF872D" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span>
          <span className="font-bold text-lg">500+</span>
          <span className="text-gray-400 text-sm">Global Cities</span>
        </div>
      </div>
    </div>
   
    {/* Right: Executive Excellence Card */}
<div className="flex-1 flex justify-end items-center mt-12 md:mt-0">
  <div className="bg-black/80 backdrop-blur-md border border-gold/30 rounded-3xl p-10 shadow-2xl w-full max-w-sm">

    <h2 className="text-2xl font-bold mb-6 text-white">Executive Excellence</h2>

    {/* 1st Feature */}
    <div className="flex items-start mb-4">
      <span className="text-gold text-2xl mr-3">
        {/* Inline SVG */}
        <svg className="w-9 h-9 flex-shrink-0 aspect-square rounded-full bg-[#BF872D]"xmlns="http://www.w3.org/2000/svg" fill="none"viewBox="0 0 24 24" stroke="currentColor">
        <path d="M5 13.7461H8M2 9.74609L4 10.7461L5.27064 6.93416C5.53292 6.14734 5.66405 5.75393 5.90729 5.46307C6.12208 5.20623 6.39792 5.00742 6.70951 4.88487C7.06236 4.74609 7.47705 4.74609 8.30643 4.74609H15.6936C16.523 4.74609 16.9376 4.74609 17.2905 4.88487C17.6021 5.00742 17.8779 5.20623 18.0927 5.46307C18.3359 5.75393 18.4671 6.14734 18.7294 6.93417L20 10.7461L22 9.74609M16 13.7461H19M6.8 10.7461H17.2C18.8802 10.7461 19.7202 10.7461 20.362 11.0731C20.9265 11.3607 21.3854 11.8196 21.673 12.3841C22 13.0259 22 13.8659 22 15.5461V18.2461C22 18.7107 22 18.9431 21.9616 19.1363C21.8038 19.9297 21.1836 20.5499 20.3902 20.7077C20.197 20.7461 19.9647 20.7461 19.5 20.7461H19C17.8954 20.7461 17 19.8507 17 18.7461C17 18.47 16.7761 18.2461 16.5 18.2461H7.5C7.22386 18.2461 7 18.47 7 18.7461C7 19.8507 6.10457 20.7461 5 20.7461H4.5C4.03534 20.7461 3.80302 20.7461 3.60982 20.7077C2.81644 20.5499 2.19624 19.9297 2.03843 19.1363C2 18.9431 2 18.7107 2 18.2461V15.5461C2 13.8659 2 13.0259 2.32698 12.3841C2.6146 11.8196 3.07354 11.3607 3.63803 11.0731C4.27976 10.7461 5.11984 10.7461 6.8 10.7461Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </span>
      <div>
        <div className="font-semibold text-gold">Bespoke Solutions</div>
        <div className="text-gray-300 text-sm">Tailored travel arrangements that align with your executive schedule and preferences.</div>
      </div>
    </div>

    {/* 2nd Feature */}
    <div className="flex items-start mb-4">
      <span className="text-gold text-2xl mr-3">
        <svg 
  className="w-9 h-9 flex-shrink-0 aspect-square rounded-full bg-[#BF872D]"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
<path d="M9 12.2465L11 14.2465L15.5 9.74645M20 12.7465C20 17.6549 14.646 21.2249 12.698 22.3613C12.4766 22.4905 12.3659 22.5551 12.2097 22.5886C12.0884 22.6146 11.9116 22.6146 11.7903 22.5886C11.6341 22.5551 11.5234 22.4905 11.302 22.3613C9.35396 21.2249 4 17.6549 4 12.7465V7.96405C4 7.16454 4 6.76479 4.13076 6.42116C4.24627 6.11759 4.43398 5.84673 4.67766 5.63198C4.9535 5.38889 5.3278 5.24853 6.0764 4.9678L11.4382 2.95713C11.6461 2.87917 11.75 2.84019 11.857 2.82473C11.9518 2.81103 12.0482 2.81103 12.143 2.82473C12.25 2.84019 12.3539 2.87917 12.5618 2.95713L17.9236 4.9678C18.6722 5.24853 19.0465 5.38889 19.3223 5.63198C19.566 5.84673 19.7537 6.11759 19.8692 6.42116C20 6.76479 20 7.16454 20 7.96405V12.7465Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      </span>
      <div>
        <div className="font-semibold text-gold">Discretion Guaranteed</div>
        <div className="text-gray-300 text-sm">Absolute confidentiality and privacy protection for all your travel arrangements.</div>
      </div>
    </div>

    {/* 3rd Feature */}
    <div className="flex items-start mb-4">
      <span className="text-gold text-2xl mr-3">   <svg 
  className="w-9 h-9 flex-shrink-0 aspect-square rounded-full bg-[#BF872D]"
  xmlns="http://www.w3.org/2000/svg"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
>
<path d="M15 3.2039C14.053 2.90645 13.0452 2.74609 12 2.74609C6.47715 2.74609 2 7.22325 2 12.7461C2 18.2689 6.47715 22.7461 12 22.7461C17.5228 22.7461 22 18.2689 22 12.7461C22 11.0308 21.5681 9.41631 20.8071 8.00554M17 6.49609H17.005M10.5001 22.6344L10.5002 20.431C10.5002 20.3117 10.5429 20.1963 10.6205 20.1057L13.1063 17.2055C13.3106 16.9672 13.2473 16.6017 12.9748 16.446L10.1185 14.8138C10.0409 14.7695 9.97663 14.7051 9.93234 14.6275L8.07046 11.3647C7.97356 11.1949 7.78657 11.0972 7.59183 11.1145L2.06418 11.6068M21 6.74609C21 8.95523 19 10.7461 17 12.7461C15 10.7461 13 8.95523 13 6.74609C13 4.53695 14.7909 2.74609 17 2.74609C19.2091 2.74609 21 4.53695 21 6.74609ZM17.25 6.49609C17.25 6.63416 17.1381 6.74609 17 6.74609C16.8619 6.74609 16.75 6.63416 16.75 6.49609C16.75 6.35802 16.8619 6.24609 17 6.24609C17.1381 6.24609 17.25 6.35802 17.25 6.49609Z" stroke="black" stroke-width="1.75" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span>
      <div>
        <div className="font-semibold text-gold">Global Network</div>
        <div className="text-gray-300 text-sm">Worldwide partnerships ensuring consistent luxury standards across all destinations.</div>
      </div>
    </div>

    <a href="#about" className="text-gold underline text-lg mt-6 hover:text-yellow-400 transition block">
      Discover Our Heritage →
    </a>
  </div>
</div>

  </div>
</section>
<section id="services" className="py-32 bg-[#0D0C0C] text-white">
  <div className="container mx-auto px-6 max-w-7xl">
    <h2 className="text-center text-5xl font-Neue Montreal font-light mb-6 text-[#D4AF37] tracking-wide">
      Our Luxurious Services
    </h2>
    <p className="text-center text-gray-300 text-xl mb-14 max-w-3xl mx-auto">
      Comprehensive luxury travel solutions tailored for executives, entrepreneurs, and discerning individuals who demand excellence.
    </p>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Card 1: Ground Transport */}
      <ServiceCard
        image="/luxury-car.png"
        alt="Luxury Ground Transportation"
        title="Luxury Ground Transportation"
        description="Premium chauffeur services with a fleet of luxury vehicles for executives and VIPs worldwide."
        bullets={[
          "Executive Sedans & SUVs",
          "Professional Chauffeurs",
          "Real-Time Tracking",
          "Global Availability",
        ]}
     
      />

      {/* Card 2: Jet Charter */}
      <ServiceCard
        image="/Private Jet Charter.png"
        alt="Private Jet Charter"
        title="Private Jet Charter"
        description="Access to the world's finest private aircraft for seamless business and leisure travel."
        bullets={[
          "Light to Heavy Jets",
          "On-Demand Availability",
          "Personalized Service",
          "Global Destinations",
        ]}
      />

      {/* Card 3: Yacht Charters */}
      <ServiceCard
        image="/Yacht Charters.png"
        alt="Luxury Yacht Charters"
        title="Luxury Yacht Charters"
        description="Luxury yacht experiences for corporate events, entertainment, and exclusive gatherings."
        bullets={[
          "Motor & Sailing Yachts",
          "Crew Included",
          "Custom Itineraries",
          "Premium Amenities",
        ]}
      />

      {/* Card 4: Concierge Services */}
      <ServiceCard
        image="/Concierge Services.png"
        alt="Personal Concierge Services"
        title="Personal Concierge Services"
        description="Personalized lifestyle management and exclusive access to experiences worldwide."
        bullets={[
          "24/7 Availability",
          "Event Planning",
          "Restaurant Reservations",
          "Exclusive Access",
        ]}
      />
    </div>
  </div>
</section>



      {/* Why Choose Us Section */}
      <section className="py-32 bg-black" id="about">
        <div className="container mx-auto px-8 max-w-7xl">
          <h2 className="text-center text-4xl font-serif font-light mb-16 text-gold tracking-wider">
            Why Choose <span
              className="font-bold"
              style={{
                color: '#BF872D',
                fontFamily: 'Bona Nova SC',
                fontSize: '48px',
                fontStyle: 'normal',
                fontWeight: 400,
                lineHeight: '48px',
                letterSpacing: '-1.92px',
                textTransform: 'capitalize',
              }}
            >
              Conquerse
            </span>
          </h2>
          <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">We deliver uncompromising quality and service excellence that exceeds the expectations of the most discerning travelers.</p>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12 text-center">
            <div>
              <div className="flex justify-center mb-4">
                <span
                  className="text-gold text-4xl"
                  style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M33.3337 21.6661C33.3337 29.9994 27.5003 34.1661 20.567 36.5828C20.2039 36.7058 19.8096 36.6999 19.4503 36.5661C12.5003 34.1661 6.66699 29.9994 6.66699 21.6661V9.99945C6.66699 9.55742 6.84259 9.1335 7.15515 8.82094C7.46771 8.50838 7.89163 8.33278 8.33366 8.33278C11.667 8.33278 15.8337 6.33278 18.7337 3.79945C19.0867 3.49778 19.5359 3.33203 20.0003 3.33203C20.4647 3.33203 20.9139 3.49778 21.267 3.79945C24.1837 6.34945 28.3337 8.33278 31.667 8.33278C32.109 8.33278 32.5329 8.50838 32.8455 8.82094C33.1581 9.1335 33.3337 9.55742 33.3337 9.99945V21.6661Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </span>
              </div>
              <h4 className="text-gold text-lg mb-2 font-semibold">Privacy & Security</h4>
              <p className="text-gray-400 text-sm">Enterprise-grade security protocols and complete discretion for all your travel arrangements.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4"><span className="text-gold text-4xl"
                style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 10V20L26.6667 23.3333" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></div>
              <h4 className="text-gold text-lg mb-2 font-semibold">24/7 Availability</h4>
              <p className="text-gray-400 text-sm">Round-the-clock support and instant booking capabilities across all time zones worldwide.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4"><span className="text-gold text-4xl" style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                >
                  <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M19.9997 36.6673C29.2044 36.6673 36.6663 29.2054 36.6663 20.0007C36.6663 10.7959 29.2044 3.33398 19.9997 3.33398C10.7949 3.33398 3.33301 10.7959 3.33301 20.0007C3.33301 29.2054 10.7949 36.6673 19.9997 36.6673Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M19.9997 3.33398C15.7201 7.82757 13.333 13.7952 13.333 20.0007C13.333 26.2061 15.7201 32.1737 19.9997 36.6673C24.2793 32.1737 26.6663 26.2061 26.6663 20.0007C26.6663 13.7952 24.2793 7.82757 19.9997 3.33398Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33301 20H36.6663" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
</span></div>
              <h4 className="text-gold text-lg mb-2 font-semibold">Global Network</h4>
              <p className="text-gray-400 text-sm">Extensive partner network covering 500+ cities worldwide with consistent service standards.</p>
            </div>
            <div>
              <div className="flex justify-center mb-4"><span className="text-gold text-4xl"
              style={{
                    borderRadius: '16px',
                    background: 'linear-gradient(135deg, #BF872D 0%, #B5802A 100%)',
                    display: 'flex',
                    width: '80px',
                    height: '80px',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}
                ><svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M25.7946 21.4824L28.3196 35.6924C28.3479 35.8597 28.3244 36.0317 28.2523 36.1853C28.1802 36.339 28.0629 36.4669 27.9161 36.5521C27.7694 36.6373 27.6001 36.6756 27.4309 36.6619C27.2618 36.6483 27.1008 36.5833 26.9696 36.4758L21.0029 31.9974C20.7149 31.7822 20.365 31.666 20.0054 31.666C19.6459 31.666 19.296 31.7822 19.0079 31.9974L13.0313 36.4741C12.9001 36.5815 12.7394 36.6463 12.5704 36.66C12.4015 36.6737 12.2324 36.6355 12.0857 36.5505C11.939 36.4656 11.8217 36.338 11.7495 36.1846C11.6772 36.0313 11.6534 35.8596 11.6813 35.6924L14.2046 21.4824" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M20 23.334C25.5228 23.334 30 18.8568 30 13.334C30 7.81114 25.5228 3.33398 20 3.33398C14.4772 3.33398 10 7.81114 10 13.334C10 18.8568 14.4772 23.334 20 23.334Z" stroke="black" stroke-width="3.33333" stroke-linecap="round" stroke-linejoin="round"/>
</svg></span></div>
              <h4 className="text-gold text-lg mb-2 font-semibold">Premium Experience</h4>
              <p className="text-gray-400 text-sm">Meticulously curated experiences with attention to every detail and personalized service.</p>
            </div>
          </div>
        </div>
      </section>
      {/* Testimonials Section */}
      <section className="py-32 bg-deep-gray">
  <div className="container mx-auto px-8 max-w-7xl">
    <h2 className="text-center text-4xl font-serif font-light mb-16 text-gold tracking-wider">
      Trusted by <span className="font-bold text-yellow-400">Industry Leaders</span>
    </h2>
    <p className="text-center text-gray-400 mb-16 max-w-2xl mx-auto">
      Discover why executives and entrepreneurs worldwide choose Conquerse for their most important journeys.
    </p>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
      {[
        {
          name: "Marcus Thompson",
          company: "Managing Partner, Goldman Capital",
          text: "“Conquerse has transformed how we handle executive travel. The attention to detail and level of service is unmatched.”",
          image: "/Marcus Thompson.png"
        },
        {
          name: "Isabella Greene",
          company: "CEO, LuxeJet Holdings",
          text: "“From jets to concierge, Conquerse handles everything flawlessly. A game-changer for luxury logistics.”",
          image: "/Marcus Thompson-2.png"
        },
        {
          name: "Daniel Wu",
          company: "Founder, Apex Innovations",
          text: "“I trust Conquerse with every international trip. They always go above and beyond.”",
          image: "/Marcus Thompson-3.png"
        },
        {
          name: "Amelia Clarke",
          company: "VP Operations, Neptune Yachts",
          text: "“The best luxury experience we've had. Seamless, stylish, and professional from start to finish.”",
          image: "/Marcus Thompson-4.png"
        }
      ].map((testimonial, index) => (
        <div key={index} className="bg-black/80 border border-gold/20 rounded-2xl p-8 shadow-lg flex flex-col">
          <div className="flex mb-4">
            {[...Array(5)].map((_, idx) => (
              <span key={idx} className="text-yellow-400 text-xl mr-1">★</span>
            ))}
          </div>
          <p className="text-gray-200 mb-6 flex-1">{testimonial.text}</p>
          <div className="flex items-center gap-4 mt-auto">
            <Image
              src={testimonial.image}
              alt={testimonial.name}
              width={48}
              height={48}
              className="rounded-full"
            />
            <div>
              <div className="text-gold font-semibold">{testimonial.name}</div>
              <div className="text-gray-400 text-sm">{testimonial.company}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>
{/* footer */}
      <footer className="bg-gradient-to-b from-deep-gray to-black py-24 border-t-2 border-gold/30" id="contact">
        <div className="container mx-auto px-8 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-20 mb-16">
            <div>
              <h4 className="text-gold mb-8 text-2xl font-serif drop-shadow-lg"> <svg width="204" height="36" viewBox="0 0 204 36" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M89.9577 0C92.1916 0 94.1964 0.429594 95.9721 1.28878C97.7477 2.11933 99.2513 3.22196 100.483 4.59666C101.743 5.94272 102.702 7.47494 103.361 9.19332C104.048 10.9117 104.392 12.6587 104.392 14.4344C104.392 15.7232 104.263 16.9117 104.005 18C103.748 19.0883 103.39 20.0907 102.931 21.0072C102.473 21.9236 101.943 22.7685 101.342 23.5418C100.769 24.2864 100.139 24.9737 99.4518 25.6038L100.869 27.1933C101.986 28.2243 103.204 29.1408 104.521 29.9427C105.838 30.7733 107.17 31.4606 108.516 32.0048C109.862 32.5776 111.194 33.0072 112.511 33.2936C113.829 33.58 115.032 33.7231 116.12 33.7231C117.065 33.7231 118.068 33.6372 119.127 33.4654C120.215 33.2936 121.304 33.0358 122.392 32.6921C123.509 32.3484 124.612 31.8902 125.7 31.3174C126.788 30.7733 127.819 30.1146 128.793 29.3413L129.051 29.7279C128.106 30.7589 127.046 31.6611 125.872 32.4344C124.698 33.2363 123.466 33.895 122.177 34.4105C120.889 34.926 119.557 35.3126 118.182 35.5704C116.836 35.8568 115.504 36 114.187 36C112.869 36 111.552 35.8854 110.235 35.6563C108.917 35.4272 107.6 35.0406 106.282 34.4964C104.965 33.9523 103.647 33.2076 102.33 32.2625C101.013 31.3461 99.6952 30.1862 98.3778 28.7828L96.9172 27.2363C96.4303 27.5513 95.8718 27.8377 95.2417 28.0955C94.6403 28.3246 93.9959 28.5251 93.3086 28.6969C92.6212 28.8687 91.9195 28.9976 91.2036 29.0835C90.4876 29.1695 89.8145 29.2124 89.1845 29.2124C87.1797 29.2124 85.3181 28.8115 83.5997 28.0095C81.91 27.179 80.4351 26.105 79.1749 24.7876C77.9434 23.4415 76.9697 21.9093 76.2537 20.1909C75.5377 18.4726 75.1797 16.7112 75.1797 14.9069C75.1797 13.074 75.509 11.2697 76.1678 9.49403C76.8265 7.68974 77.7859 6.08592 79.046 4.68258C80.3348 3.27924 81.8957 2.14797 83.7286 1.28878C85.5616 0.429594 87.6379 0 89.9577 0ZM89.9148 27.7088C91.8336 27.6229 93.5234 27.1933 94.984 26.42C96.4446 25.6181 97.6475 24.6157 98.5926 23.4129C99.5663 22.1814 100.297 20.8353 100.784 19.3747C101.27 17.9141 101.514 16.4821 101.514 15.0788C101.514 13.5036 101.213 11.9141 100.612 10.3103C100.039 8.6778 99.2227 7.21718 98.163 5.9284C97.132 4.61098 95.8718 3.55131 94.3826 2.7494C92.8933 1.91885 91.2465 1.50358 89.4422 1.50358C87.6666 1.50358 86.0627 1.90453 84.6308 2.70644C83.2274 3.47971 82.0389 4.4821 81.0651 5.7136C80.0914 6.94511 79.3468 8.31981 78.8312 9.83771C78.3157 11.327 78.058 12.8019 78.058 14.2625C78.058 15.8377 78.3444 17.4272 78.9172 19.031C79.5186 20.6348 80.3491 22.0811 81.4088 23.3699C82.4685 24.6587 83.7143 25.7041 85.1463 26.506C86.6069 27.3079 88.1964 27.7088 89.9148 27.7088Z" fill="#BF872D"/>
<path d="M107.398 0H113.499V0.429594H113.284C113.055 0.429594 112.854 0.515512 112.682 0.68735C112.511 0.830548 112.353 1.01671 112.21 1.24582C112.095 1.47494 112.009 1.71838 111.952 1.97613C111.895 2.23389 111.866 2.46301 111.866 2.66348V19.6325C111.866 20.7494 111.981 21.7804 112.21 22.7255C112.439 23.6706 112.826 24.4869 113.37 25.1742C113.914 25.8616 114.63 26.4057 115.518 26.8067C116.406 27.179 117.494 27.3652 118.783 27.3652C120.215 27.3652 121.36 27.136 122.219 26.6778C123.079 26.2196 123.737 25.6325 124.196 24.9165C124.654 24.1718 124.955 23.3413 125.098 22.4248C125.241 21.5084 125.313 20.6062 125.313 19.7184V2.66348C125.313 2.46301 125.284 2.23389 125.227 1.97613C125.169 1.71838 125.069 1.47494 124.926 1.24582C124.811 1.01671 124.668 0.830548 124.496 0.68735C124.324 0.515512 124.138 0.429594 123.938 0.429594H123.723V0H128.406V0.429594H128.191C127.962 0.429594 127.761 0.515512 127.589 0.68735C127.446 0.830548 127.303 1.01671 127.16 1.24582C127.045 1.47494 126.959 1.71838 126.902 1.97613C126.845 2.23389 126.816 2.46301 126.816 2.66348V19.5895C126.816 21.4511 126.587 22.9833 126.129 24.1862C125.671 25.3604 125.04 26.2912 124.239 26.9785C123.437 27.6659 122.492 28.1384 121.403 28.3962C120.344 28.6539 119.212 28.7828 118.009 28.7828C116.721 28.7828 115.518 28.6396 114.401 28.3532C113.313 28.0955 112.367 27.6229 111.565 26.9356C110.764 26.2482 110.134 25.3174 109.675 24.1432C109.217 22.9403 108.988 21.4368 108.988 19.6325V2.66348C108.988 2.46301 108.959 2.23389 108.902 1.97613C108.845 1.71838 108.745 1.47494 108.601 1.24582C108.487 1.01671 108.344 0.830548 108.172 0.68735C108 0.515512 107.814 0.429594 107.613 0.429594H107.398V0Z" fill="#BF872D"/>
<path d="M152.621 27.9236H152.836V28.3532H146.778V27.9236H146.993C147.194 27.9236 147.38 27.8377 147.552 27.6659C147.723 27.494 147.867 27.2936 147.981 27.0644C148.124 26.8353 148.225 26.5919 148.282 26.3341C148.339 26.0477 148.368 25.79 148.368 25.5609V2.66348C148.368 2.46301 148.339 2.23389 148.282 1.97613C148.225 1.71838 148.124 1.47494 147.981 1.24582C147.867 1.01671 147.723 0.830548 147.552 0.68735C147.38 0.515512 147.194 0.429594 146.993 0.429594H146.778V0H154.253C157.117 0 159.322 0.558472 160.869 1.67542C162.444 2.79236 163.232 4.43914 163.232 6.61575C163.232 7.70406 163.046 8.66348 162.673 9.49403C162.33 10.2959 161.857 10.9976 161.256 11.599C160.654 12.1718 159.938 12.6444 159.108 13.0167C158.306 13.3604 157.447 13.6181 156.53 13.79L159.623 18.5155C160.368 19.6611 161.127 20.7924 161.9 21.9093C162.673 22.9976 163.432 24.1289 164.177 25.3031C164.377 25.5895 164.592 25.8902 164.821 26.2052C165.079 26.5203 165.337 26.8067 165.595 27.0644C165.881 27.3222 166.167 27.537 166.454 27.7088C166.769 27.852 167.084 27.9236 167.399 27.9236V28.3532H165.552C164.406 28.3532 163.461 28.0811 162.716 27.537C162 26.9642 161.399 26.3055 160.912 25.5609C159.623 23.6706 158.334 21.7518 157.046 19.8043C155.785 17.8568 154.525 15.9379 153.265 14.0477C152.95 14.0191 152.606 13.9905 152.234 13.9618C151.89 13.9045 151.561 13.8473 151.246 13.79V25.5609C151.246 25.79 151.275 26.0477 151.332 26.3341C151.389 26.5919 151.475 26.8353 151.59 27.0644C151.733 27.2936 151.876 27.494 152.019 27.6659C152.191 27.8377 152.392 27.9236 152.621 27.9236ZM151.246 1.46062V12.3723H151.461C151.69 12.401 152.048 12.4296 152.535 12.4582C153.05 12.4582 153.68 12.4582 154.425 12.4582C155.027 12.4582 155.657 12.3723 156.315 12.2005C157.003 12 157.633 11.685 158.206 11.2554C158.807 10.7971 159.294 10.21 159.666 9.49403C160.067 8.77804 160.268 7.87589 160.268 6.78759C160.268 5.69928 160.053 4.81146 159.623 4.12411C159.222 3.43675 158.649 2.8926 157.905 2.49165C157.189 2.09069 156.315 1.81861 155.284 1.67542C154.253 1.53222 153.122 1.46062 151.89 1.46062H151.246Z" fill="#BF872D"/>
<path d="M186.043 21.179C186.043 22.611 185.757 23.8425 185.184 24.8735C184.611 25.8759 183.866 26.6921 182.95 27.3222C182.062 27.9523 181.045 28.4105 179.9 28.6969C178.783 28.9833 177.666 29.1265 176.549 29.1265C175.403 29.1265 174.415 29.0119 173.585 28.7828C172.754 28.5537 171.995 28.3389 171.308 28.1384C170.85 27.9952 170.434 27.8807 170.062 27.7947C169.69 27.6802 169.317 27.6229 168.945 27.6229V22.7255H169.375C169.375 23.8138 169.647 24.6873 170.191 25.3461C170.764 25.9761 171.422 26.463 172.167 26.8067C172.912 27.1504 173.656 27.3795 174.401 27.494C175.146 27.58 175.69 27.6229 176.033 27.6229C177.265 27.6229 178.325 27.4511 179.212 27.1074C180.1 26.7351 180.831 26.2625 181.403 25.6897C181.976 25.0883 182.391 24.4296 182.649 23.7136C182.936 22.9976 183.079 22.2673 183.079 21.5227C183.079 20.5776 182.878 19.79 182.477 19.1599C182.076 18.5012 181.547 17.9284 180.888 17.4415C180.258 16.9547 179.528 16.5394 178.697 16.1957C177.866 15.852 177.022 15.5084 176.162 15.1647C175.189 14.7924 174.229 14.4057 173.284 14.0048C172.339 13.6038 171.494 13.1169 170.749 12.5442C170.005 11.9427 169.403 11.241 168.945 10.4391C168.487 9.60859 168.258 8.59188 168.258 7.38902C168.258 6.12888 168.501 5.04057 168.988 4.12411C169.475 3.179 170.119 2.40573 170.921 1.8043C171.752 1.20286 172.683 0.758949 173.714 0.472553C174.773 0.157518 175.847 0 176.936 0C177.68 0 178.382 0.0572793 179.041 0.171838C179.699 0.257756 180.329 0.372314 180.931 0.515512C181.418 0.63007 181.89 0.730309 182.349 0.816229C182.807 0.873507 183.251 0.902147 183.68 0.902147V5.32697H183.251C183.193 3.83771 182.606 2.83532 181.489 2.31981C180.372 1.77565 178.826 1.50358 176.85 1.50358C175.704 1.50358 174.759 1.70406 174.014 2.10501C173.298 2.47733 172.726 2.94988 172.296 3.52267C171.866 4.06683 171.566 4.66826 171.394 5.32697C171.251 5.95704 171.179 6.51551 171.179 7.00239C171.179 7.80429 171.351 8.49165 171.695 9.06444C172.067 9.63723 172.554 10.1384 173.155 10.568C173.757 10.9976 174.444 11.3842 175.217 11.7279C176.019 12.0716 176.85 12.401 177.709 12.716C178.683 13.0883 179.671 13.4893 180.673 13.9189C181.675 14.3484 182.563 14.8783 183.337 15.5084C184.138 16.1384 184.783 16.9117 185.27 17.8282C185.785 18.7446 186.043 19.8616 186.043 21.179Z" fill="#BF872D"/>
<path d="M186.158 27.9236H186.373C186.602 27.9236 186.803 27.852 186.974 27.7088C187.146 27.537 187.289 27.3365 187.404 27.1074C187.547 26.8783 187.647 26.6348 187.705 26.3771C187.791 26.1193 187.834 25.8759 187.834 25.6468V2.66348C187.834 2.46301 187.791 2.23389 187.705 1.97613C187.647 1.71838 187.547 1.47494 187.404 1.24582C187.289 1.01671 187.146 0.830548 186.974 0.68735C186.803 0.515512 186.602 0.429594 186.373 0.429594H186.158V0H202.698V3.99523H202.268C202.211 3.33651 201.953 2.76372 201.495 2.27685C201.036 1.76134 200.32 1.50358 199.347 1.50358H190.712V12.3723H197.843C198.502 12.3723 199.046 12.1718 199.476 11.7709C199.934 11.3699 200.163 10.8974 200.163 10.3532H200.593V15.7232H200.163C200.163 15.2076 199.948 14.7637 199.519 14.3914C199.089 14.0191 198.531 13.8329 197.843 13.8329H190.712V26.8496H200.12C200.664 26.8496 201.137 26.7208 201.538 26.463C201.939 26.2052 202.268 25.9045 202.526 25.5609C202.812 25.1885 203.013 24.8019 203.127 24.401C203.27 23.9714 203.342 23.6134 203.342 23.327H203.772V28.3532H186.158V27.9236Z" fill="#BF872D"/>
<path d="M128.879 27.9236H129.094C129.323 27.9236 129.523 27.852 129.695 27.7088C129.867 27.537 130.01 27.3365 130.125 27.1074C130.268 26.8783 130.368 26.6348 130.425 26.3771C130.511 26.1193 130.554 25.8759 130.554 25.6468V2.66348C130.554 2.46301 130.511 2.23389 130.425 1.97613C130.368 1.71838 130.268 1.47494 130.125 1.24582C130.01 1.01671 129.867 0.830548 129.695 0.68735C129.523 0.515512 129.323 0.429594 129.094 0.429594H128.879V0H145.418V3.99523H144.989C144.931 3.33651 144.674 2.76372 144.215 2.27685C143.757 1.76134 143.041 1.50358 142.067 1.50358H133.433V12.3723H140.564C141.223 12.3723 141.767 12.1718 142.196 11.7709C142.655 11.3699 142.884 10.8974 142.884 10.3532H143.313V15.7232H142.884C142.884 15.2076 142.669 14.7637 142.239 14.3914C141.81 14.0191 141.251 13.8329 140.564 13.8329H133.433V26.8496H142.841C143.385 26.8496 143.857 26.7208 144.258 26.463C144.659 26.2052 144.989 25.9045 145.246 25.5609C145.533 25.1885 145.733 24.8019 145.848 24.401C145.991 23.9714 146.063 23.6134 146.063 23.327H146.492V28.3532H128.879V27.9236Z" fill="#BF872D"/>
<path d="M56.6054 27.9236H56.8202V28.3532H52.0517V27.9236H52.2665C52.467 27.9236 52.6532 27.8377 52.825 27.6659C53.0255 27.494 53.183 27.2936 53.2976 27.0644C53.4121 26.8353 53.498 26.5919 53.5553 26.3341C53.6412 26.0477 53.6842 25.79 53.6842 25.5609V2.66348C53.6842 2.46301 53.6556 2.23389 53.5983 1.97613C53.5696 1.71838 53.498 1.47494 53.3835 1.24582C53.2689 1.01671 53.1114 0.830548 52.9109 0.68735C52.7105 0.515512 52.467 0.429594 52.1806 0.429594H51.9658V0H56.3047L71.899 24.5728V2.66348C71.899 2.46301 71.856 2.23389 71.7701 1.97613C71.7128 1.71838 71.6126 1.47494 71.4694 1.24582C71.3548 1.01671 71.2116 0.830548 71.0398 0.68735C70.868 0.515512 70.6675 0.429594 70.4384 0.429594H70.2236V0H75.035V0.429594H74.8202C74.5911 0.429594 74.3906 0.515512 74.2188 0.68735C74.047 0.830548 73.8894 1.01671 73.7462 1.24582C73.6317 1.47494 73.5458 1.71838 73.4885 1.97613C73.4312 2.23389 73.4026 2.46301 73.4026 2.66348V15.5084V28.3532H70.7391L55.1878 3.69451V25.5609C55.1878 25.79 55.2164 26.0477 55.2737 26.3341C55.331 26.5919 55.4169 26.8353 55.5315 27.0644C55.6747 27.2936 55.8322 27.494 56.004 27.6659C56.1758 27.8377 56.3763 27.9236 56.6054 27.9236Z" fill="#BF872D"/>
<path d="M15.3795 1.54654C13.2601 1.54654 11.4129 1.93317 9.83771 2.70644C8.29117 3.45107 7.00239 4.43914 5.97136 5.67064C4.94033 6.87351 4.16707 8.23389 3.65155 9.75179C3.16468 11.2697 2.92124 12.7733 2.92124 14.2625C2.92124 15.9523 3.2506 17.6134 3.90931 19.2458C4.56802 20.8496 5.47017 22.2816 6.61575 23.5418C7.78997 24.7733 9.15036 25.7757 10.6969 26.5489C12.2434 27.2936 13.9189 27.6659 15.7232 27.6659C16.2387 27.6659 16.8401 27.6086 17.5274 27.494C18.2434 27.3795 18.9451 27.1647 19.6325 26.8496C20.3198 26.506 20.9499 26.0334 21.5227 25.432C22.1241 24.8305 22.5823 24.043 22.8974 23.0692H23.327V27.8377C22.8974 27.8377 22.4391 27.895 21.9523 28.0095C21.494 28.1241 20.9785 28.253 20.4057 28.3962C19.6611 28.5967 18.8305 28.7828 17.9141 28.9547C17.0263 29.1265 16.0811 29.2124 15.0788 29.2124C12.5871 29.2124 10.3962 28.7828 8.50597 27.9236C6.61575 27.0644 5.04057 25.9475 3.78043 24.5728C2.52029 23.1981 1.57518 21.6515 0.945107 19.9332C0.315035 18.1862 0 16.4248 0 14.6492C0 12.8735 0.315035 11.1122 0.945107 9.36515C1.57518 7.61814 2.53461 6.05728 3.82339 4.68258C5.11217 3.27924 6.73031 2.14797 8.6778 1.28878C10.6253 0.429594 12.9165 0 15.5513 0C16.4964 0 17.3413 0.0859186 18.0859 0.257756C18.8592 0.429593 19.5465 0.601431 20.148 0.77327C20.5776 0.916468 20.9642 1.03103 21.3079 1.11694C21.6802 1.17422 22.0382 1.20286 22.3819 1.20286V5.97136H21.9523C21.7804 5.08353 21.4654 4.35322 21.0072 3.78043C20.5489 3.179 20.0048 2.72076 19.3747 2.40573C18.7733 2.09069 18.1146 1.8759 17.3986 1.76134C16.7112 1.61814 16.0382 1.54654 15.3795 1.54654Z" fill="#BF872D"/>
<path d="M38 26C36.34 26 34.78 25.6848 33.32 25.0544C31.86 24.424 30.59 23.5692 29.51 22.49C28.43 21.4108 27.5752 20.1408 26.9456 18.68C26.316 17.2192 26.0008 15.6592 26 14C25.9992 12.3408 26.3144 10.7808 26.9456 9.32C27.5768 7.8592 28.4316 6.5892 29.51 5.51C30.5884 4.4308 31.8584 3.576 33.32 2.9456C34.7816 2.3152 36.3416 2 38 2C39.6584 2 41.2184 2.3152 42.68 2.9456C44.1416 3.576 45.4116 4.4308 46.49 5.51C47.5684 6.5892 48.4236 7.8592 49.0556 9.32C49.6876 10.7808 50.0024 12.3408 50 14C49.9976 15.6592 49.6824 17.2192 49.0544 18.68C48.4264 20.1408 47.5716 21.4108 46.49 22.49C45.4084 23.5692 44.1384 24.4244 42.68 25.0556C41.2216 25.6868 39.6616 26.0016 38 26ZM38 23.6C40.68 23.6 42.95 22.67 44.81 20.81C46.67 18.95 47.6 16.68 47.6 14C47.6 13.86 47.5952 13.7148 47.5856 13.5644C47.576 13.414 47.5708 13.2892 47.57 13.19C47.47 13.77 47.2 14.25 46.76 14.63C46.32 15.01 45.8 15.2 45.2 15.2H42.8C42.14 15.2 41.5752 14.9652 41.1056 14.4956C40.636 14.026 40.4008 13.4608 40.4 12.8V11.6H35.6V9.2C35.6 8.54 35.8352 7.9752 36.3056 7.5056C36.776 7.036 37.3408 6.8008 38 6.8H39.2C39.2 6.34 39.3252 5.9352 39.5756 5.5856C39.826 5.236 40.1308 4.9508 40.49 4.73C40.09 4.63 39.6852 4.55 39.2756 4.49C38.866 4.43 38.4408 4.4 38 4.4C35.32 4.4 33.05 5.33 31.19 7.19C29.33 9.05 28.4 11.32 28.4 14H34.4C35.72 14 36.85 14.47 37.79 15.41C38.73 16.35 39.2 17.48 39.2 18.8V20H35.6V23.3C36 23.4 36.3952 23.4752 36.7856 23.5256C37.176 23.576 37.5808 23.6008 38 23.6Z" fill="white"/>
</svg></h4>
              <p className="text-gray-400 mb-6">Your All-in-One Luxury Travel Services partner, delivering exceptional experiences worldwide.</p>
              <div className="flex gap-4">
              <a href="#" className="text-gold hover:text-yellow-400 flex items-center" aria-label="Facebook">
                  <span className="sr-only">Facebook</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.9997 1.66602H12.4997C11.3946 1.66602 10.3348 2.105 9.5534 2.8864C8.77199 3.66781 8.33301 4.72761 8.33301 5.83268V8.33268H5.83301V11.666H8.33301V18.3327H11.6663V11.666H14.1663L14.9997 8.33268H11.6663V5.83268C11.6663 5.61167 11.7541 5.39971 11.9104 5.24343C12.0667 5.08715 12.2787 4.99935 12.4997 4.99935H14.9997V1.66602Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  
                </a>
                <a href="#" className="text-gold hover:text-yellow-400 flex items-center" aria-label="Twitter">
                  <span className="sr-only">Twitter</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3337 3.3327C18.3337 3.3327 17.7503 5.0827 16.667 6.16603C18.0003 14.4994 8.83366 20.5827 1.66699 15.8327C3.50033 15.916 5.33366 15.3327 6.66699 14.166C2.50033 12.916 0.416992 7.99937 2.50033 4.16603C4.33366 6.3327 7.16699 7.5827 10.0003 7.49937C9.25033 3.99937 13.3337 1.99937 15.8337 4.3327C16.7503 4.3327 18.3337 3.3327 18.3337 3.3327Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
       </a>
                <a href="#" className="text-gold hover:text-yellow-400 flex items-center" aria-label="Instagram">
                  <span className="sr-only">Instagram</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.167 1.66602H5.83366C3.53247 1.66602 1.66699 3.5315 1.66699 5.83268V14.166C1.66699 16.4672 3.53247 18.3327 5.83366 18.3327H14.167C16.4682 18.3327 18.3337 16.4672 18.3337 14.166V5.83268C18.3337 3.5315 16.4682 1.66602 14.167 1.66602Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M13.3337 9.47525C13.4366 10.1688 13.3181 10.8771 12.9952 11.4994C12.6723 12.1218 12.1614 12.6264 11.5351 12.9416C10.9088 13.2569 10.1991 13.3666 9.5069 13.2552C8.81468 13.1438 8.17521 12.817 7.67944 12.3212C7.18367 11.8255 6.85685 11.186 6.74546 10.4938C6.63408 9.80154 6.74379 9.09183 7.05901 8.46556C7.37423 7.8393 7.8789 7.32837 8.50123 7.00545C9.12356 6.68254 9.83187 6.56407 10.5254 6.66692C11.2328 6.77182 11.8878 7.10147 12.3935 7.60717C12.8992 8.11288 13.2288 8.76782 13.3337 9.47525Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M14.583 5.41602H14.5913" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  
                </a>
                <a href="#" className="text-gold hover:text-yellow-400 flex items-center" aria-label="LinkedIn">
                  <span className="sr-only">LinkedIn</span>
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M13.333 6.66602C14.6591 6.66602 15.9309 7.1928 16.8685 8.13048C17.8062 9.06816 18.333 10.3399 18.333 11.666V17.4993H14.9997V11.666C14.9997 11.224 14.8241 10.8001 14.5115 10.4875C14.199 10.1749 13.775 9.99935 13.333 9.99935C12.891 9.99935 12.4671 10.1749 12.1545 10.4875C11.8419 10.8001 11.6663 11.224 11.6663 11.666V17.4993H8.33301V11.666C8.33301 10.3399 8.85979 9.06816 9.79747 8.13048C10.7352 7.1928 12.0069 6.66602 13.333 6.66602Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M5.00033 7.5H1.66699V17.5H5.00033V7.5Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M3.33366 4.99935C4.25413 4.99935 5.00033 4.25316 5.00033 3.33268C5.00033 2.41221 4.25413 1.66602 3.33366 1.66602C2.41318 1.66602 1.66699 2.41221 1.66699 3.33268C1.66699 4.25316 2.41318 4.99935 3.33366 4.99935Z" stroke="#9CA3AF" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  
                </a>
                     
                
                
              </div>
            </div>
            <div>
              <h4 className="text-gold mb-8 text-2xl font-serif drop-shadow-lg">Services</h4>
              <ul>
                <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors text-lg">Ground Transportation</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors text-lg">Private Jet Booking</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors text-lg">Yacht Charters</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-gold transition-colors text-lg">Concierge Services</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold mb-8 text-2xl font-serif drop-shadow-lg">Locations</h4>
              <ul>
                <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-lg">US Locations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-lg">European Destinations</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-lg">Asia & Middle East</a></li>
                <li><a href="#" className="text-gray-400 hover:text-gold transition-colors text-lg">Popular Destinations</a></li>
              </ul>
            </div>
            <div>
              <h4 className="text-gold mb-8 text-2xl font-serif drop-shadow-lg">Contact</h4>
              <ul>
                <li className="text-gray-400 text-lg mb-2 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.3332 14.0994V16.5994C18.3341 16.8315 18.2866 17.0612 18.1936 17.2739C18.1006 17.4865 17.9643 17.6774 17.7933 17.8343C17.6222 17.9912 17.4203 18.1107 17.2005 18.185C16.9806 18.2594 16.7477 18.287 16.5165 18.2661C13.9522 17.9875 11.489 17.1112 9.32486 15.7078C7.31139 14.4283 5.60431 12.7212 4.32486 10.7078C2.91651 8.53377 2.04007 6.05859 1.76653 3.48276C1.7457 3.25232 1.77309 3.02006 1.84695 2.80078C1.9208 2.5815 2.03951 2.38 2.1955 2.20911C2.3515 2.03822 2.54137 1.90169 2.75302 1.8082C2.96468 1.71471 3.19348 1.66631 3.42486 1.6661H5.92486C6.32928 1.66212 6.72136 1.80533 7.028 2.06904C7.33464 2.33275 7.53493 2.69897 7.59153 3.09943C7.69705 3.89949 7.89274 4.68504 8.17486 5.4411C8.28698 5.73937 8.31125 6.06353 8.24478 6.37516C8.17832 6.6868 8.02392 6.97286 7.79986 7.19943L6.74153 8.25776C7.92783 10.3441 9.65524 12.0715 11.7415 13.2578L12.7999 12.1994C13.0264 11.9754 13.3125 11.821 13.6241 11.7545C13.9358 11.688 14.2599 11.7123 14.5582 11.8244C15.3143 12.1066 16.0998 12.3022 16.8999 12.4078C17.3047 12.4649 17.6744 12.6688 17.9386 12.9807C18.2029 13.2926 18.3433 13.6907 18.3332 14.0994Z" stroke="#BF872D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

                  +1 (555) 123-4567
                </li>
                <li className="text-gray-400 text-lg mb-2 flex items-center gap-2">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M16.666 3.33398H3.33268C2.41221 3.33398 1.66602 4.08018 1.66602 5.00065V15.0007C1.66602 15.9211 2.41221 16.6673 3.33268 16.6673H16.666C17.5865 16.6673 18.3327 15.9211 18.3327 15.0007V5.00065C18.3327 4.08018 17.5865 3.33398 16.666 3.33398Z" stroke="#BF872D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.3327 5.83398L10.8577 10.584C10.6004 10.7452 10.3029 10.8307 9.99935 10.8307C9.69575 10.8307 9.39829 10.7452 9.14102 10.584L1.66602 5.83398" stroke="#BF872D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  contact@conquerse.com
                </li>
                <li className="text-gray-400 text-lg mb-2 flex items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="0 0 20 20" fill="none">
  <path d="M16.6673 8.33268C16.6673 12.4935 12.0515 16.8268 10.5015 18.1652C10.3571 18.2738 10.1813 18.3325 10.0007 18.3325C9.81999 18.3325 9.64421 18.2738 9.49982 18.1652C7.94982 16.8268 3.33398 12.4935 3.33398 8.33268C3.33398 6.56457 4.03636 4.86888 5.28661 3.61864C6.53685 2.36839 8.23254 1.66602 10.0007 1.66602C11.7688 1.66602 13.4645 2.36839 14.7147 3.61864C15.9649 4.86888 16.6673 6.56457 16.6673 8.33268Z" stroke="#BF872D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M10 10.834C11.3807 10.834 12.5 9.7147 12.5 8.33398C12.5 6.95327 11.3807 5.83398 10 5.83398C8.61929 5.83398 7.5 6.95327 7.5 8.33398C7.5 9.7147 8.61929 10.834 10 10.834Z" stroke="#BF872D" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
                  123 Luxury Lane, Premium District, New York, NY 10001
                </li>
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center self-stretch pt-12 border-t border-gray-600/20 text-gray-400 text-xl">
            <p>&copy; 2024 Conquerse. All rights reserved. Where technology serves luxury.</p>
            <div className="flex gap-8 justify-center mt-4 text-sm">
              <a href="#" className="hover:text-gold">Privacy Policy</a>
              <a href="#" className="hover:text-gold">Terms of Service</a>
              <a href="#" className="hover:text-gold">Cookie Policy</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}


                