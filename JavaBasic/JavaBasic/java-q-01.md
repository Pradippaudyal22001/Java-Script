# Selection questions.

#### 1) What will the output be?(choose one)
```java
public class Main {
    public static void main(String[] args) {
        String numOne = "127";
        int changeInt = Integer.parseInt(numOne);
        byte changeByte = Byte.parseByte(numOne);
        
        System.out.print(changeByte);
        System.out.print(changeInt);
    }
}
```
1. コンパイルエラーになります。
2. 例外エラーになります。
3. 127が出力します。
4. 127127が出力します。
#### 2) What will the output be?(choose one)
```java
1 public class Main {
2     public static void main(String[] args) {
3         final byte a;
4         int b = 120;
5         a = (byte) b;
6         b = a++;
7         System.out.printf("a=%d,b=%d", a, b);
8     }
9 }
```
1. コンパイルエラーになります。
2. 例外エラーになります。
3. 5行目にエラーが出てます。
4. 6行目にエラーが出てます。
5. a=120,b=120が出力します。
#### 3) What will the output be?(choose one)
```java
public class Main {
    public static void main(String[] args) {
        int x = 10;
        int y = ++x;

        System.out.printf("x=%d,y=%d",x++,++y);
    }
}
```
1. x=12,y=11
2. x=11,y=12
3. x=12,y=12
4. x=11,y=11
5. x=10,y=11
6. x=10,y=12
#### 4) What will the output be?(choose one)
```java
public class Main {
    public static void main(String[] args) {
        int a = 10/3;
        System.out.println(a);
    }
}
```
1. コンパイルエラーになります。
2. 3.333333
3. 4
4. 3
#### 5) What will the output be?(choose one)
```java
 1 public class Main {
 2     public static void main(String[] args) {
 3         String myInt = "3";
 4         int parseMyInt = Integer.parseInt(myInt);

 5         if (parseMyInt++ == 3) {
 6             System.out.println("A");
 7         } else if (parseMyInt == 3) {
 8             System.out.println("B");
 9         } else {
10             System.out.println("C");
          }
      }
  }
```
1. 4行目にエラーが出てます。
2. Aを出します。
3. Bを出します。
4. Cを出します。
5. 出力なしです。
#### 6) What will the output be?(choose one)
```java
public class Main {
    public static void main(String[] args) {
        int a = 10, b = 20;
        a += b + 3;
        
        System.out.printf("a=%d,b=%d", a, b);
    }
}
```
1. a=30,b=20
2. a=10,b=20
3. a=33,b=20
4. a=10,b=23
5. a=33,b=23
6. a=30,b=23
#### 7) Choose the uncorrect line from below code.(choose 3)
```java
 1 public class Main {
 2     public static void main(String[] args) {
 3         long l = 20;
 4         byte b = -128;
 5         int i = l;
 6         short s = b;
 7         float f = 12.34;
 8         double d = f;
 9         l = d;
10         d = i;
11         i = b;
12     }
13 }
```
1. 4行目にエラーが出てます。
2. 5行目にエラーが出てます。
3. 7行目にエラーが出てます。
4. 8行目にエラーが出てます。
5. 9行目にエラーが出てます。
6. 10行目にエラーが出てます。