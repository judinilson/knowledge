<template>
    <div class="user-pages">
          <PageTitle icon="fa fa-cogs" main="User system"
            sub="User Add articles" />
        <div class="user-pages-tabs">
            <b-card no-body>
                <b-tabs card>
                    <b-tab title="Articles" active>
                        <ArticleUser/>
                    </b-tab>
                </b-tabs>
            </b-card>
        </div>       
    </div>
</template>

<script>
import PageTitle from '../template/PageTitle'
import ArticleUser from './ArticleUser'

export default {
    name: 'UserPages',
    components:{PageTitle,ArticleUser}
}
</script>