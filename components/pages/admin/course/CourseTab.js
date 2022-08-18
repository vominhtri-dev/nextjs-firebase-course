import {
    Accordion,
    AccordionButton,
    AccordionIcon,
    AccordionItem,
    AccordionPanel,
    Box,
    List,
    ListIcon,
    ListItem,
    Tab,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text,
} from "@chakra-ui/react"
import React from "react"
import { BsBookmarkCheck, BsFillTrophyFill, BsCardList } from "react-icons/bs"
import { FiTarget } from "react-icons/fi"
import { MdCheckCircle, MdHomeFilled } from "react-icons/md"

export default function CourseTab() {
    const courseDetail = {
        overview:
            "Hiểu sâu hơn về cách Javascript hoạt động, tìm hiểu về IIFE, closure, reference types, this keyword, bind, call, apply, prototype, ...",
        goal: [
            "Được học kiến thức miễn phí với nội dung chất lượng hơn mất phí",
            "Các kiến thức nâng cao của Javascript giúp code trở nên tối ưu hơn",
            "Hiểu được cách tư duy nâng cao của các lập trình viên có kinh nghiệm",
            "Hiểu được các khái niệm khó như từ khóa this, phương thức bind, call, apply & xử lý bất đồng bộ",
            "Có nền tảng Javascript vững chắc để làm việc với mọi thư viện, framework viết bởi Javascript",
            "Nâng cao cơ hội thành công khi phỏng vấn xin việc nhờ kiến thức chuyên môn vững chắc",
        ],
        require: [
            "Hoàn thành khóa học Javascript cơ bản tại F8 hoặc đã nắm chắc Javascript cơ bản",
            "Tuy duy mở để dễ dàng tiếp nhận các tư tưởng mới được chia sẻ trong các bài học",
            "Máy vi tính kết nối internet (Windows, Ubuntu hoặc MacOS)",
            "Ý thức cao, trách nhiệm cao trong việc tự học. Thực hành lại sau mỗi bài học",
            "Khi học nếu có khúc mắc hãy tham gia hỏi/đáp tại group FB: Học lập trình web (fullstack.edu.vn)",
            "Bạn không cần biết gì hơn nữa, trong khóa học tôi sẽ chỉ cho bạn những gì bạn cần phải biết",
        ],
        list: [
            {
                id: 74,
                course_id: 12,
                title: "IIFE, Scope, Closure",
                is_free: true,
                position: 1,
                track_steps: [
                    {
                        id: 2646,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 620,
                        position: 1,
                        is_published: false,
                        step: {
                            id: 620,
                            title: "Giới thiệu",
                            duration: 108,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 2647,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 621,
                        position: 2,
                        is_published: false,
                        step: {
                            id: 621,
                            title: "IIFE là gì?",
                            duration: 1437,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 3327,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 35,
                        position: 3,
                        is_published: false,
                        step: {
                            id: 35,
                            title: "Ôn tập về IIFE #1",
                            duration: 89,
                        },
                    },
                    {
                        id: 3326,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 34,
                        position: 4,
                        is_published: false,
                        step: {
                            id: 34,
                            title: "Ôn tập về IIFE #2",
                            duration: 215,
                        },
                    },
                    {
                        id: 2714,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 681,
                        position: 5,
                        is_published: false,
                        step: {
                            id: 681,
                            title: "Scope là gì?",
                            duration: 2187,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 3325,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 33,
                        position: 6,
                        is_published: false,
                        step: {
                            id: 33,
                            title: "Ôn tập về scope #1",
                            duration: 65,
                        },
                    },
                    {
                        id: 3324,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 32,
                        position: 7,
                        is_published: false,
                        step: {
                            id: 32,
                            title: "Ôn tập về scope #2",
                            duration: 16,
                        },
                    },
                    {
                        id: 2715,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 682,
                        position: 8,
                        is_published: false,
                        step: {
                            id: 682,
                            title: "Khái niệm Closure?",
                            duration: 2451,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 3323,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 31,
                        position: 9,
                        is_published: false,
                        step: {
                            id: 31,
                            title: "Ôn tập về khái niệm Closure",
                            duration: 209,
                        },
                    },
                    {
                        id: 3154,
                        track_id: 74,
                        step_type: "App\\Common\\Models\\Lesson",
                        step_id: 702,
                        position: 10,
                        is_published: false,
                        step: {
                            id: 702,
                            title: "Feedback: Độ dài 1 video bao nhiêu là phù hợp?",
                            duration: 60,
                        },
                    },
                ],
            },
            {
                id: 188,
                course_id: 12,
                title: "Hoisting, Strict Mode, Data Types",
                is_free: false,
                position: 2,
                track_steps: [
                    {
                        id: 2716,
                        track_id: 188,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 683,
                        position: 11,
                        is_published: false,
                        step: {
                            id: 683,
                            title: "Hoisting là gì?",
                            duration: 658,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 3322,
                        track_id: 188,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 30,
                        position: 12,
                        is_published: false,
                        step: {
                            id: 30,
                            title: "Thực hành hoisting",
                            duration: 151,
                        },
                    },
                    {
                        id: 2717,
                        track_id: 188,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 684,
                        position: 13,
                        is_published: false,
                        step: {
                            id: 684,
                            title: "Strict mode?",
                            duration: 845,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 3321,
                        track_id: 188,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 29,
                        position: 14,
                        is_published: false,
                        step: {
                            id: 29,
                            title: "Thực hành Strict mode",
                            duration: 101,
                        },
                    },
                    {
                        id: 2719,
                        track_id: 188,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 686,
                        position: 15,
                        is_published: false,
                        step: {
                            id: 686,
                            title: "Primitive Types & Reference Types",
                            duration: 1915,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 3320,
                        track_id: 188,
                        step_type: "App\\Common\\Models\\Quiz",
                        step_id: 28,
                        position: 16,
                        is_published: false,
                        step: {
                            id: 28,
                            title: "Thực hành Primitive Types & Reference Types",
                            duration: 135,
                        },
                    },
                    {
                        id: 3237,
                        track_id: 188,
                        step_type: "App\\Common\\Models\\Lesson",
                        step_id: 704,
                        position: 17,
                        is_published: false,
                        step: {
                            id: 704,
                            title: "Feedback: Bạn đang sử dụng hệ điều hành nào?",
                            duration: 60,
                        },
                    },
                ],
            },
            {
                id: 189,
                course_id: 12,
                title: "This, Bind, Call, Apply",
                is_free: false,
                position: 3,
                track_steps: [
                    {
                        id: 2718,
                        track_id: 189,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 685,
                        position: 18,
                        is_published: false,
                        step: {
                            id: 685,
                            title: 'Từ khóa "this"?',
                            duration: 1501,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 2720,
                        track_id: 189,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 687,
                        position: 19,
                        is_published: false,
                        step: {
                            id: 687,
                            title: "Fn.bind() method - Phần 1",
                            duration: 880,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 2721,
                        track_id: 189,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 688,
                        position: 20,
                        is_published: false,
                        step: {
                            id: 688,
                            title: "Fn.bind() method - Phần 2",
                            duration: 1413,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 2722,
                        track_id: 189,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 689,
                        position: 21,
                        is_published: false,
                        step: {
                            id: 689,
                            title: "Fn.call() method",
                            duration: 1221,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 2768,
                        track_id: 189,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 749,
                        position: 22,
                        is_published: false,
                        step: {
                            id: 749,
                            title: "Fn.apply() method",
                            duration: 979,
                            image_url: "",
                            video_url: null,
                        },
                    },
                ],
            },
            {
                id: 90,
                course_id: 12,
                title: "Các bài thực hành",
                is_free: true,
                position: 4,
                track_steps: [
                    {
                        id: 2600,
                        track_id: 90,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 548,
                        position: 23,
                        is_published: false,
                        step: {
                            id: 548,
                            title: "Tự code thư viện build UI",
                            duration: 3234,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 2601,
                        track_id: 90,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 549,
                        position: 24,
                        is_published: false,
                        step: {
                            id: 549,
                            title: "Code ứng dụng Todo List",
                            duration: 4441,
                            image_url: "",
                            video_url: null,
                        },
                    },
                ],
            },
            {
                id: 111,
                course_id: 12,
                title: "Vừa giải trí vừa học",
                is_free: true,
                position: 5,
                track_steps: [
                    {
                        id: 2782,
                        track_id: 111,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 696,
                        position: 25,
                        is_published: false,
                        step: {
                            id: 696,
                            title: '"Code Thiếu Nhi Battle" Tranh Giành Trà Sữa Size L',
                            duration: 1510,
                            image_url: "",
                            video_url: null,
                        },
                    },
                    {
                        id: 2783,
                        track_id: 111,
                        step_type: "App\\Common\\Models\\Video",
                        step_id: 702,
                        position: 26,
                        is_published: false,
                        step: {
                            id: 702,
                            title: '"Học Xong" Javascript Có Giải Được "Code Thiếu Nhi"?',
                            duration: 2280,
                            image_url: "",
                            video_url: null,
                        },
                    },
                ],
            },
            {
                id: 120,
                course_id: 12,
                title: "Hoàn thành khóa học",
                is_free: false,
                position: 6,
                track_steps: [
                    {
                        id: 2830,
                        track_id: 120,
                        step_type: "App\\Common\\Models\\Lesson",
                        step_id: 687,
                        position: 27,
                        is_published: false,
                        step: {
                            id: 687,
                            title: "Hướng dẫn ứng tuyển xin việc làm",
                            duration: 720,
                        },
                    },
                    {
                        id: 3149,
                        track_id: 120,
                        step_type: "App\\Common\\Models\\Lesson",
                        step_id: 700,
                        position: 28,
                        is_published: false,
                        step: {
                            id: 700,
                            title: "Nhận chứng chỉ khóa học",
                            duration: 60,
                        },
                    },
                ],
            },
        ],
    }

    return (
        <Box py='4'>
            <Tabs>
                <TabList>
                    <Tab>
                        <Text display={["none", "block"]}>Tổng quan</Text>
                        <Text display={["block", "none"]}>
                            <MdHomeFilled />
                        </Text>
                    </Tab>
                    <Tab>
                        <Text display={["none", "block"]}>Thành quả</Text>
                        <Text display={["block", "none"]}>
                            <BsFillTrophyFill />
                        </Text>
                    </Tab>
                    <Tab>
                        <Text display={["none", "block"]}>Yêu cầu</Text>
                        <Text display={["block", "none"]}>
                            <FiTarget />
                        </Text>
                    </Tab>
                    <Tab>
                        <Text display={["none", "block"]}>Nội dung</Text>
                        <Text display={["block", "none"]}>
                            <BsCardList />
                        </Text>
                    </Tab>
                </TabList>

                <TabPanels>
                    <TabPanel px='0'>
                        <Text
                            display={["block", "none"]}
                            fontWeight='bold'
                            mb='4'
                        >
                            Tổng quan
                        </Text>
                        <Text>{courseDetail.overview}</Text>
                    </TabPanel>
                    <TabPanel px='0'>
                        <Text
                            display={["block", "none"]}
                            fontWeight='bold'
                            mb='4'
                        >
                            Bạn học được gì ?
                        </Text>
                        <List>
                            {courseDetail.goal.map((courseFea, idx) => (
                                <ListItem key={idx} mb='4'>
                                    <ListIcon
                                        as={MdCheckCircle}
                                        color='green.500'
                                    />
                                    {courseFea}
                                </ListItem>
                            ))}
                        </List>
                    </TabPanel>
                    <TabPanel px='0'>
                        <Text
                            display={["block", "none"]}
                            fontWeight='bold'
                            mb='4'
                        >
                            Yêu cầu
                        </Text>
                        <List>
                            {courseDetail.require.map((courseFea, idx) => (
                                <ListItem key={idx} mb='4'>
                                    <ListIcon
                                        as={MdCheckCircle}
                                        color='green.500'
                                    />
                                    {courseFea}
                                </ListItem>
                            ))}
                        </List>
                    </TabPanel>
                    <TabPanel p='0'>
                        <Text
                            display={["block", "none"]}
                            fontWeight='bold'
                            my='4'
                        >
                            Danh sách bài học
                        </Text>
                        <List mt='4'>
                            {courseDetail.list.map((courseFea, idx) => (
                                <ListItem key={idx} mb='4'>
                                    <Accordion allowToggle='true'>
                                        <AccordionItem
                                            borderTop={"none"}
                                            borderBottom='none'
                                        >
                                            <h2>
                                                <AccordionButton rounded='md'>
                                                    <ListIcon
                                                        as={BsBookmarkCheck}
                                                        color='blue.500'
                                                    />
                                                    <Box
                                                        flex='1'
                                                        textAlign='left'
                                                    >
                                                        {courseFea.title}
                                                    </Box>
                                                    <AccordionIcon />
                                                </AccordionButton>
                                            </h2>
                                            <AccordionPanel pb={4}>
                                                <List>
                                                    {courseFea.track_steps.map(
                                                        (step, idx) => (
                                                            <ListItem
                                                                ml='8'
                                                                key={idx}
                                                                my='2'
                                                            >
                                                                {step.position <
                                                                10
                                                                    ? `0${step.position}`
                                                                    : step.position}{" "}
                                                                -{" "}
                                                                {
                                                                    step.step
                                                                        .title
                                                                }
                                                            </ListItem>
                                                        )
                                                    )}
                                                </List>
                                            </AccordionPanel>
                                        </AccordionItem>
                                    </Accordion>
                                </ListItem>
                            ))}
                        </List>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Box>
    )
}
