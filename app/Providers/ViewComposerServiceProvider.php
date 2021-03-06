<?php

namespace App\Providers;

use App\Dawn\Support\ViewCache;
use App\Models\Link;
use App\Models\Tag;
use App\Models\Topic;
use App\Models\User;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Blade;
use Illuminate\Support\Facades\Cache;
use Illuminate\Support\Facades\View as ViewContainer;
use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Str;
use Illuminate\View\View;

class ViewComposerServiceProvider extends ServiceProvider
{
    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {

        ViewContainer::composer('layouts.app', function (View $view) {

        });

        ViewContainer::composer('partials.app-footer', function (View $view) {
            $view->with('socials', $this->socials());
            $view->with('links', $this->links());
            $view->with('topics', $this->topics());
        });

        ViewContainer::composer('partials.app-header', function (View $view) {
            $view->with('searchTop', $this->searchTop());
        });

//        ViewContainer::composer('layouts.user', function (View $view) {
//            $view->with('user', $this->currentUser());
//        });

        Blade::directive('cache', function ($expression) {
            if (Str::startsWith($expression, '(')) {
                $expression = Str::substr($expression, 1, -1);
            }

            return "<?php echo app()->make('viewcache')->cache(Arr::except(get_defined_vars(), ['__data', '__path']), {$expression}); ?>";
        });
    }

    /**
     * @return array
     */
    protected function socials()
    {
        return [
            'github' => 'https://github.com/loyep/dawn'
        ];
    }

    /**
     * @return Link[]|\Illuminate\Database\Eloquent\Collection
     */
    protected function links()
    {
        return Link::all();
    }

    /**
     * @return Topic[]|\Illuminate\Database\Eloquent\Collection
     */
    protected function topics()
    {
        return Topic::all();
    }

    /**
     * @return mixed
     */
    protected function searchTop()
    {
        return Cache::remember('search_top', 3600, function () {
            return Tag::take(8)->get();
        });
    }

    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton('viewcache', ViewCache::class);
    }

    protected function currentUser()
    {
        $key = Str::lower('current user|'.request()->ip());
        return Cache::remember($key, 3600, function () {
            $authUser = Auth::user();
            $user = User::withCount(['articles', 'comments'])->find($authUser->id);
            return $user;
        });
    }
}
