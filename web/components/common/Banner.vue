<script lang="ts" setup>
import { Row, Col } from 'ant-design-vue'
import Container from './Container.vue'

</script>

<template>
    <div class="banner">
        <div
            class="banner-bg"
            style="background: linear-gradient(rgb(184, 191, 183) 0%, rgb(23, 56, 51) 100%, rgb(131, 94, 76) 100%);"
        />
        <Container>
            <Row>
                <Col :span="12">
                    <div class="banner-item">111</div>
                </Col>
                <Col :span="12">
                    <Row>
                        <Col :span="12">
                            <div class="banner-item">111</div>
                        </Col>
                        <Col :span="12">
                            <div class="banner-item">111</div>
                        </Col>
                        <Col :span="12">
                            <div class="banner-item">111</div>
                        </Col>
                        <Col :span="12">
                            <div class="banner-item">111</div>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    </div>
</template>

<style lang="less" scoped>
.banner {
    padding-top: 4.8125rem;

    position: relative;
    overflow: hidden;
    padding-bottom: 1.5rem;
}

.banner-item {
    flex: 1 1 auto;
}

.banner-bg {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 0.6;
}
</style>