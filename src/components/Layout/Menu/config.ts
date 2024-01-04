// 菜单栏配置文件
// 1. 学生
// 2. 管理员
// 3. 超级管理员

export const studentMenus = [
    {
        label: '考题选择',
        key: 'exam_select',
    },
    {
        label: '考试记录',
        key: 'exam_history',
    }
]

export const adminMenus = [
    {
        label: '阅卷列表',
        key: 'corret_exam_list',
    },
    {
        label: '考题管理',
        key: 'subject_add',
    },
    {
        label: '课程管理',
        key: 'subject_manage',
    },
    {
        label: '学员管理',
        key: 'student_manage',
    }
]

export const superAdminMenus = [
    {
        label: '阅卷列表',
        key: 'corret_exam_list',
    },
    {
        label: '考题管理',
        key: 'subject_add',
    },
    {
        label: '课程管理',
        key: 'subject_manage',
    },
    {
        label: '学员管理',
        key: 'student_manage',
    },
    {
        label: '管理员管理',
        key: 'admin_manage',
    }
]