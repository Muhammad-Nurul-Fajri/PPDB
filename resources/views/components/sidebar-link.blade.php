@props(['active' => false, 'icon' => '', 'variant' => 'light'])

@php
$classes = $active
            ? ($variant === 'dark' 
                ? 'flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-gray-800 text-white shadow-sm' 
                : 'flex items-center px-4 py-3 text-sm font-medium rounded-lg bg-white bg-opacity-10 text-white')
            : ($variant === 'dark'
                ? 'flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-gray-800 hover:text-white transition-colors'
                : 'flex items-center px-4 py-3 text-sm font-medium rounded-lg hover:bg-white hover:bg-opacity-10 transition-colors');
@endphp

<a {{ $attributes->merge(['class' => $classes]) }}>
    @if($icon)
        <i class="bi {{ $icon }} text-lg mr-3"></i>
    @endif
    {{ $slot }}
</a>
