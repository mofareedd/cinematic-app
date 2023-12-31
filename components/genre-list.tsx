import React from "react"
import { Pressable, ScrollView } from "react-native"
import { moviesGenres } from "@/constant/genre"

import { cn } from "@/lib/utils"

import StyledText from "./ui/text"

interface IProps {
  genreId: number
  setGenreId: (id: number) => void
}
export default function GenreList({ genreId, setGenreId }: IProps) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="my-8"
    >
      {moviesGenres.map((genre, i) => {
        const isActive = genre.id === genreId
        return (
          <Pressable
            onPress={() => setGenreId(genre.id)}
            key={genre.id}
            className={cn(
              "rounded-lg px-6 py-2",
              i === 0 ? "ml-6" : "",
              isActive ? "bg-input" : ""
            )}
          >
            <StyledText className={cn(isActive ? "text-primary" : "")}>
              {genre.name}
            </StyledText>
          </Pressable>
        )
      })}
    </ScrollView>
  )
}
