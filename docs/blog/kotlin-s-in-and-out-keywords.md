# Kotlin's in and out keywords

I’ve written a lot of Kotlin code over the past three years, but I didn’t get Kotlin’s `in` and `out` keywords… until yesterday. Here I’ll record my understanding so hopefully I don’t forget how they work. I’m basing this on Kotlin’s documentation on generics.

## `in` and `out` on classes

`in` and `out` can appear in two different places and have slightly different meanings depending on the context. First, they can appear on a type variable in a class definition:

```kt
interface Producer<out T> {
  fun produceT(): T
}
```

In this case, `out T` is telling the compiler that methods on Source only return values of type T. Methods on Source are prohibited from taking arguments of type T. The following is a compiler error:

```kt
interface Producer<out T> {
    fun consumeT(t: T) // Type parameter T is declared as 'out' but occurs in 'in' position in type T
}
```

(Side note: Why couldn’t the Kotlin compiler figure out that T is only returned from methods on Source and automatically infer out? Maybe there are situations where we explicitly don’t want T to be `out`.)

Conversely, `in T` tells the compiler that methods on Source only take values of type T as arguments:

```kt
interface Consumer<in T> {
    fun consumeT(t: T) // No type error

    fun produceT(): T // Type parameter T is declared as 'in' but occurs in 'out' position in type T
}
```

Why do we need `in` and `out` in this context? Kotlin’s documentation on generics gives a good set of examples explaining why these keywords are useful. In brief:

For a class `Producer<out T>`, Kotlin will treat `Producer<Derived>` as a subclass of `Producer<Base>`. For a class `Consumer<in T>`, Kotlin will treat `Consumer<Base>` as a superclass of `Consumer<Derived>`. By default, without the `in` and `out` keywords, `Producer<Base>` and `Producer<Derived>` are unrelated classes.

This is useful because sometimes we want to treat the return value of a method on `Producer<Derived>` as a Base. Or we want to pass a Derived into a method on `Consumer<Base>` that takes a Base.

## `in` and `out` on variable and argument types

Some classes need to have a mix of methods that take arguments of type T and that return a value of type T. An example from Kotlin’s generics documentation:

```kt
class Array<T>(vararg elements: T) {
    operator fun get(index: Int): T { ... }
    operator fun set(index: Int, value: T) { ... }
}
```

This is where it comes in handy that we can use `in` and `out` in a second place: on type variables when specifying the type of a method argument or just of a value. We can do something like:

```kt
val array: Array<out String> = Array("hello", "world")
array.get(0) // No type error
array.set(0, "cool" /* Type mismatch, required: Nothing, found: String */)
```

Or:

```kt
val array: Array<in String> = Array("hello", "world")
val result = array.get(0) // result has type Any?
array.set(0, "cool") // No type error
```

Again this is nice because `Array<out String>` is a subtype of `Array<Any>`, while `Array<in String>` is a supertype of `Array<SomeHypotheticalSubTypeOfString>`.
