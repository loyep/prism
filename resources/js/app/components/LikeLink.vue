<template>
  <a href="javascript:;" @click.stop="handleLike">
    <slot />
  </a>
</template>

<script>
    export default {
        name: 'LikeLink',
        props: {
            id: {
                type: String,
                required: true
            }
        },
        data () {
            return {
                loading: false
            }
        },
        methods: {
            handleLike () {
                if (this.loading) {
                    return
                }
                this.loading = true
                this.$http.post('post-like', {
                    'id': this.id
                }).then(res => {
                    const elItems = document.getElementsByClassName('like-count');
                    const count = res.likes_count
                    for (let i = 0; i < elItems.length; i++) {
                        elItems[i].innerHTML = count;
                    }

                    const hearts = document.getElementsByClassName('post-like');
                    for (let i = 0; i < hearts.length; i++) {
                        if (res.is_liked) {
                            hearts[i].classList.add('current')
                        } else {
                            hearts[i].classList.remove('current')
                        }
                    }
                    document.querySelector('.post-like .el-badge__content').innerHTML = count > 99 ? '99+' : count

                    if (res.is_liked) {
                        this.$notify({
                            title: '点赞',
                            message: '谢谢点赞',
                            type: 'success',
                            showClose: false
                        });
                    } else {
                        this.$notify({
                            title: '点赞',
                            message: '取消点赞',
                            type: 'warning',
                            showClose: false
                        });
                    }
                }).finally(() => {
                    setTimeout(() => {
                        this.loading = false
                    }, 300)
                })
                console.log('handleLike')
            }
        }
    }
</script>
