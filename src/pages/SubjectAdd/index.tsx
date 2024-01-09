import { Button, TreeSelect } from 'antd'
import styles from './index.module.scss'
import { useState } from 'react';

export default function SubjectAdd() {
    const treeData = [
        {
            value: 'parent 1',
            title: 'parent 1',
            children: [
                {
                    value: 'parent 1-0',
                    title: 'parent 1-0',
                    children: [
                        {
                            value: 'leaf1',
                            title: 'leaf1',
                        },
                        {
                            value: 'leaf2',
                            title: 'leaf2',
                        },
                    ],
                },
                {
                    value: 'parent 1-1',
                    title: 'parent 1-1',
                    children: [
                        {
                            value: 'leaf3',
                            title: <b style={{ color: '#08c' }}>leaf3</b>,
                        },
                    ],
                },
            ],
        },
    ];
    const [value,] = useState<string>();
    return (
        <div className={styles.wrap}>
            {/* 头部 */}
            <div className="title-bar">
                <p className="title">网络</p>
                <div className="lesson-select">
                    <TreeSelect
                        popupClassName={'subject-add-tree-select'}
                        style={{ width: 320 }}
                        treeDefaultExpandAll
                        treeData={treeData}
                        value={value}
                    />
                    <Button type="primary">
                        新增题目
                    </Button>
                </div>
            </div>
            {/* 内容区 */}
            <div className="content">
                <div className="left">
                    left
                </div>
                <div className="right">
                    right
                </div>
            </div>
        </div>
    )
}
