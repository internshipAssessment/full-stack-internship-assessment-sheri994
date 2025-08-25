import pytest
from task import top_k_words

def test_basic():
    text = "Apple banana apple! BANANA, banana; grape."
    assert top_k_words(text, 2) == ["banana", "apple"]

def test_ties_and_alpha():
    text = "a b c A B C a b"
    # counts: a:3, b:3, c:2 -> top 2 by freq; tie alpha -> a,b
    assert top_k_words(text, 2) == ["a", "b"]

def test_non_alnum_and_zero_k():
    assert top_k_words("... -- !!", 3) == []
    assert top_k_words("one two", 0) == []
