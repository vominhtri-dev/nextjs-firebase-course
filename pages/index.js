import Head from 'next/head'
import Banner from '../components/pages/home/Banner'
import CategorySection from '../components/pages/home/CategorySection'
import CategoryTab from '../components/pages/home/CategoryTab'
import CourseSection from '../components/pages/home/CourseSection'
import FeatureSection from '../components/pages/home/FeatureSection'

export default function Home() {
    return (
        <div>
            <Head>
                <title>
                    Tridev.io - Học lập trình miễn phí | Học lập trình
                    Javascript | Học lập trình cho người mới
                </title>
                <meta
                    name='description'
                    content='Generated by create next app'
                />
                <link rel='icon' type='image/png' href='/code.png' />
            </Head>

            <Banner
                bannerText='Tridev'
                headingText='Học lập trình cho người mới bắt đầu'
                desText='Nền tảng Tridev.io cung cấp cho bạn các khóa học,
                bài giảng, thông tin về lập trình một cách hoàn toàn
                miễn phí.'
                primaryColor='#4549e0'
                secondaryColor='#805AD5'
            />
            <CategoryTab />
            <CourseSection />
            <FeatureSection />
            <CategorySection />
        </div>
    )
}
