import React from 'react'
import { Col, Row } from 'react-bootstrap'

const BlogItem = (props) => {
    const {post} =props
    return (
        <>
            <Row>
                <Col>
                    <ul>
                        <li>{post.title}</li>
                        <img src={post.url} />
                    </ul>
                </Col>
            </Row>
        </>
    )
}

export default BlogItem
